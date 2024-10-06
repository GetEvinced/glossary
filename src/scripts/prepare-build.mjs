import fs from 'fs/promises';
import path from 'path';

const ignore = [path.relative(process.cwd(), path.join(process.cwd(), '..', 'content', 'kitchen-sink.md'))];

function removeIgnored(files) {
  return files.filter(item => !ignore.includes(item));
}

async function findMarkdownFiles(dir) {
  const files = await fs.readdir(dir);
  const mdFiles = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = await fs.stat(filePath);

    if (stats.isDirectory()) {
      const subFiles = await findMarkdownFiles(filePath);
      mdFiles.push(...subFiles);
    } else if (path.extname(filePath) === '.md') {
      const relativePath = path.relative(process.cwd(), filePath);
      mdFiles.push(relativePath)
    }
  }

  return removeIgnored(mdFiles);
}

async function writeStringToFile(filePath, content) {
  await fs.writeFile(filePath, content, 'utf8');
}

async function extractHeadingFromFile(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    const lines = content.split('\n');

    for (const line of lines) {
      if (line.startsWith('#')) {
        return line.trim().slice(1).trim();
      }
    }

    return null; // No heading found
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
}

function makeTree(mdFiles) {
  const tree = {
    children: new Map(),
    files: new Map()
  };
  for (const file of mdFiles) {
    const parts = file.split(path.sep);
    parts.splice(0, 1)
    let current = tree;
    for (const part of parts) {
      if (part.endsWith('.md')) {
        current.files.set(part.slice(0, -3), file);
      } else if (!current.children.has(part)) {
        current.children.set(part, {
          children: new Map(),
          files: new Map()
        })
      }
      current = current.children.get(part);
    }
  }
  return tree
}

async function convertToRoutes(mdFiles) {
  const tree = makeTree(mdFiles).children.get('content');
  tree.files.delete('error')
  const traverse = async (current, path) => {
    const joinPathParts = (...addons) => {
      const allParts = [...path, ...addons];
      return allParts.length > 0 ? allParts.join('/') : '';
    }
    const files = [];
    const folders = [];
    const overview = current.files.get('overview')
    current.files.delete('overview')
    const label = await extractHeadingFromFile(overview)
    const outputPath = joinPathParts('overview')
    files.push({
      label: 'Overview',
      path: outputPath,
      contentPath: outputPath
    })
    if (current.files.size > 0) {
      for (const [id, file] of current.files) {
        const outputPath = joinPathParts(id)
        files.push({
          label: await extractHeadingFromFile(file),
          path: outputPath,
          contentPath: outputPath
        })
      }
    }
    for (const [key, value] of current.children) {
      folders.push(await traverse(value, [...path, key]))
    }
    return {
      label,
      children: [...files, ...folders]
    };
  }
  return await traverse(tree, []);
}

async function main() {
  const mdFiles = await findMarkdownFiles(path.join(process.cwd(), '..', 'content'));
  const routes = await convertToRoutes(mdFiles);
  const shellFIleContent = `${mdFiles.join(',')}\n.`;
  await writeStringToFile('shell-file', shellFIleContent);
  await writeStringToFile('routes.json', JSON.stringify(routes, null, 2));
}

main();

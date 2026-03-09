import { watch } from 'node:fs/promises';

async function watchDirectory(directory) {
  const watcher = watch(directory);

  console.log(`Watching for changes in ${directory}...`, watcher);

  for await (const event of watcher) {
    console.log(`File ${event.filename} has been ${event.eventType}`, event);
  }
}

watchDirectory('./watchedDirectory');

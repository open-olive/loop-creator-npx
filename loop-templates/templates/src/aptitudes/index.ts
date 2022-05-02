import clipboard from './clipboard';
import document from './document';
import filesystem from './filesystem';
import keyboard from './keyboard';
import network from './network';
import process from './process';
import search from './search';
import ui from './ui';
import user from './user';
import window from './window';
import index from './index.ts.squirrelly';
import { FileMap } from '@/types';

const fileMap: FileMap = {
  clipboard: { fileName: 'clipboard', aptitude: 'clipboard' },
  document: { fileName: 'document', aptitude: 'document' },
  filesystem: { fileName: 'filesystem', aptitude: 'filesystem' },
  keyboard: { fileName: 'keyboard', aptitude: 'keyboard' },
  network: { fileName: 'network', aptitude: 'network' },
  process: { fileName: 'process', aptitude: 'process' },
  search: { fileName: 'search', aptitude: 'search' },
  ui: { fileName: 'ui', aptitude: 'any' },
  user: { fileName: 'user', aptitude: 'user' },
  window: { fileName: 'window', aptitude: 'window' },
  index: { fileName: 'index.ts', aptitude: 'any' },
};

export default {
  clipboard,
  document,
  filesystem,
  keyboard,
  network,
  process,
  search,
  ui,
  user,
  window,
  index,
  fileMap,
};

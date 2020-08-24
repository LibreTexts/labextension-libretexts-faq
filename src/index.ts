import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IMainMenu } from '@jupyterlab/mainmenu';

import { ICommandPalette } from '@jupyterlab/apputils';

import { ILauncher } from '@jupyterlab/launcher';

import { LabIcon } from '@jupyterlab/ui-components';

import LibreTextsIconSVG from '../style/icons/libretexts.svg';

const extension: JupyterFrontEndPlugin<void> = {
  id: 'labextension-libretexts-faq',
  autoStart: true,
  requires: [IMainMenu, ICommandPalette, ILauncher],
  activate: (app: JupyterFrontEnd, mainMenu: IMainMenu, palette: ICommandPalette, launcher: ILauncher) => {
    app.commands.addCommand('libretexts-open-faq', {
      label: 'LibreTexts JupyterHub FAQ',
      icon: new LabIcon({
        name: 'libretexts-icon',
        svgstr: LibreTextsIconSVG
      }),
      execute: () => {
        return app.commands.execute('help:open', {
          url: '/hub/faq',
          text: 'LibreTexts JupyterHub FAQ'
        });
      }
    });
    mainMenu.helpMenu.addGroup([{ command: 'libretexts-open-faq' }], 0);
    palette.addItem({ command: 'libretexts-open-faq', category: 'Help' });
    launcher.add({ command: 'libretexts-open-faq', category: 'Other' });
  }
};

export default extension;

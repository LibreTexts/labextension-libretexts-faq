import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the labextension-libretexts-faq extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'labextension-libretexts-faq',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension labextension-libretexts-faq is activated!');
  }
};

export default extension;

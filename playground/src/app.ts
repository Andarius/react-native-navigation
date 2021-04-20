import { setDefaultOptions } from './commons/options/Options';
import addProcessors from './commons/Processors';
import { registerScreens } from './screens';
import Screens from './screens/Screens';
import Navigation from './services/Navigation';
import testIDs from './testIDs';

// @ts-ignore
alert = (title, message) =>
  Navigation.showOverlay({
    component: {
      name: Screens.Alert,
      passProps: {
        title,
        message,
      },
    },
  });

function start() {
  registerScreens();
  addProcessors();
  setDefaultOptions();
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.dismissAllModals();
    setRoot();
  });
}

function setRoot() {
  Navigation.setRoot({
    root: {
      sideMenu: {
        center: {
          bottomTabs: {
            options: {
              bottomTabs: {
                tabsAttachMode: 'afterInitialTab',
              },
            },
            children: [
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'Layouts',
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      text: 'Layouts',
                      icon: require('../img/layouts.png'),
                      selectedIcon: require('../img/layouts_selected.png'),
                      testID: testIDs.LAYOUTS_TAB,
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'Options',
                      },
                    },
                  ],
                  options: {
                    topBar: {
                      title: {
                        text: 'Default Title',
                      },
                    },
                    bottomTab: {
                      text: 'Options',
                      icon: require('../img/options.png'),
                      selectedIcon: require('../img/options_selected.png'),
                      testID: testIDs.OPTIONS_TAB,
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'Navigation',
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      },
    },
  });
}

export { start };

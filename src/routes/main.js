export const mainRoot = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: 'Home',
            options: {
              topBar: {
                title: {
                  text: 'Home',
                  color: 'white',
                },
                background: {
                  color: '#4d089a',
                },
                animate: true,
              },
            },
          },
        },
        {
          component: {
            name: 'Settings',
          },
        },
      ],
    },
  },
};

# vue-todo-list-demo

English | [简体中文](./README.zh-Hans.md)

A todo list demo for new Vuer, initialled by vue-cli 4 and built with vue 2, vue-router 3, vuex 3 and vuetify 2.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Using nvm, node lts, npm lts and yarn is recommended.
  - Install nvm first
    - [nvm for Mac/Linux](https://github.com/nvm-sh/nvm#readme)
    - [nvm-windows](https://github.com/coreybutler/nvm-windows#readme) - [known issue #300](https://github.com/coreybutler/nvm-windows/issues/300)
  - Install node lts in terminal / command line
  - Globally update npm to lts and install yarn

    ```sh
    npm i -g npm@lts
    npm i -g yarn
    ```

  - Mirrors are set by default for Chinese users
- Git is also required.
  - [git for Windows/Linux](https://git-scm.com/downloads)
  - It is recommended to use [Homebrew](https://brew.sh/) to install git on Mac

### Installing

```sh
# clone the project
git clone git@github.com:ModyQyW/vue-todo-list-demo.git

# enter the project directory
cd vue-todo-list-demo

# install dependency
yarn

# build for development
yarn dev

# build for production
yarn build

# lint scripts, styles and ls
yarn lint

# git commit and git push
# git add should be handled by yourself
yarn commit
```

## Running the tests

No tests now. Pull requests are welcome.

## Built With

- [vue](https://vuejs.org)
- [vue-cli](https://cli.vuejs.org/)
- [vue-router](https://router.vuejs.org/)
- [vuex](https://vuex.vuejs.org/)
- [vue-i18n](https://kazupon.github.io/vue-i18n/)
- [vuetify](https://vuetifyjs.com/en/)
- [sass](https://sass-lang.com/) - using [dart-sass](https://sass-lang.com/dart-sass) here
- [commitlint](https://commitlint.js.org/)
- [commitizen](http://commitizen.github.io/cz-cli/)
- [prettier](https://prettier.io/)
- [eslint](https://eslint.org/)
- [stylelint](https://stylelint.io/)
- [ls-lint](https://ls-lint.org/)
- [husky](https://github.com/typicode/husky#readme)
- [lint-staged](https://github.com/okonet/lint-staged#readme)

## Browsers Support

Please read [.browserslistrc](./.browserslistrc) for details.

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on code of conduct, and the process for submitting pull requests.

## Authors

- **Rui Wu** - *Initial work* - [ModyQyW](https://github.com/ModyQyW)

See also the list of [contributors](https://github.com/ModyQyW/vue-todo-list-demo/contributors) who participated in this project.

## License

[MIT](./LICENSE)

Copyright (c) 2019-present ModyQyW

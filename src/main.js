export function configure(aurelia) {
    console.log('configurando Aurelia');
    aurelia.use.basicConfiguration();

    console.log('setando o modulo principal da aplicacao');
    aurelia.start().then(() => aurelia.setRoot());
}
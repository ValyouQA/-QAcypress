describe('Ввод некорректного пароля staya.dog', function () {
    it('Проверка, что пользователь оповещается о том что данные не корректны', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('vis-valerij-judin@qa.studio');
        cy.get('.auth-form > form > [type="password"]').type('123456789');
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
    })
})
describe('Тестирование staya.dog', function () {

    it('Проверка, что вход с использованием валидных значений работает и после входа открываются мои заказы', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('vis-valerij-judin@qa.studio');
        cy.get('.auth-form > form > [type="password"]').type('123456789aA');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');
    })
})

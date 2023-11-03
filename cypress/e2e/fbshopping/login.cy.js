/// <reference types="cypress" />

describe('Testeamos la app de notas', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('div.list-route').click()
    })
    it('Aparece texto si no estamos logueados', () => {
        const text = 'Necesitas estar logueado para poder leer y añadir tareas';
        cy.contains(text)
    });
    it('No podemos escribir ni el titulo ni la descripción', () => {
        cy.get('input[placeholder="Título"]').should('be.disabled')
        cy.get('textarea#description').should('be.disabled')
        cy.get('button.submit-button').should('be.disabled')
    });
    it('Estando logueados, el título, la descripción y el botón de envío están activos', () => {
        // Primero hacemo login
        const email = 'fbshopping@email.com';
        const password = 'fbshopping@email.com';
        cy.contains('Login').click()
        cy.get('input[id="emailLogin"]').type(email)
        cy.get('input#passwordLogin').type(password)
        cy.get('button.submit-button').click()
        cy.contains('Inicio de sesion válido').should('exist')

        // Entra en la ruta del listado
        cy.get('div.list-route').click()

        cy.get('input[placeholder="Título"]').should('be.enabled')
        cy.get('textarea#description').should('be.enabled')
        cy.get('button.submit-button').should('be.enabled')
    });

});

describe('Testeamos la gestión de usuarios', () => {

    beforeEach(() => {
        cy.visit('/')
    })
    it('Se renderiza correctamente', () => {
        cy.contains('FbShopping')
    });
    it('Podemos acceder a la ruta Login', () => {
        cy.contains('Bienvenid@ a Login').should('not.exist')
        cy.contains('Login').click()
        cy.contains('Bienvenid@ a Login')
    });
    it('Podemos acceder a la ruta de Registrarse', () => {
        const registerTitle = '¡Regístrate para tener acceso a la app!';
        cy.contains(registerTitle).should('not.exist')
        cy.contains('...o regístrate').click()
        cy.contains(registerTitle).should('exist')
    });
    it('Podemos gegistrar un usuario', () => {
        const email = 'fbshopping@email.com';
        const password = 'fbshopping@email.com';
        cy.contains('...o regístrate').click()
        cy.get('input[id="emailRegister"]').type(email)
        cy.get('input#passwordRegister').type(password)
        // cy.get('button.submit-button').click()
        // cy.contains('Bienvenid@ a FbShopping').should('exist')
    });
    it('Podemos iniciar sesión', () => {
        const email = 'fbshopping@email.com';
        const password = 'fbshopping@email.com';
        cy.contains('Login').click()
        cy.get('input[id="emailLogin"]').type(email)
        cy.get('input#passwordLogin').type(password)
        cy.get('button.submit-button').click()
        cy.contains('Inicio de sesion válido').should('exist')
    });
});




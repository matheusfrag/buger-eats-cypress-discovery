var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '31999999999',
            address: {
                postalcode: '30110012',
                street: 'Avenida do Contorno',
                number: '2090',
                details: 'Sala 401',
                district: 'Floresta',
                city_state: 'Belo Horizonte/MG'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data

    }
}
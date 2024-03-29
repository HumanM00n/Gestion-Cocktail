<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    
        <div class="container border mt-5">
        <h1>Connexion</h1>

        <!-- Cela veut dire qu'au moment de la soumission je lui dit d'aller à la méthode "login" -->
        <form @submit.prevent="login" class="d-flex flex-column justify-content-center align-items-center mt-5 mb-5">

            <!-- ADRESSE MAIL -->
            <div class="mb-3" id="formGroup">
                <label for="user_mail" class="form-label mr-5">Adresse mail</label>
                <input type="text" class="form-control" id="user_mail" v-model="user.login"/>
            </div>

            <!-- MOT DE PASSE -->
            <div class="mb-3">
                <label for="user_password" class="form-label">Mot de passe</label>
                <input type="text" class="form-control" id="user_password" v-model="user.password"/>
            </div>
            <button type="submit" class="btn btn-primary" id="button">Connexion</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return {
            user: {
                login: '',
                password: ''
            }
        }
    },

    methods: {
        login() {
            console.log('stop form')
            console.log(this.user.login)
        }
    }
}
</script>
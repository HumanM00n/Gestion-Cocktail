<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <div>
        <ul>
            <li><router-link to='/'>Accueil</router-link></li>
            <br>
            <li><router-link to='/admin/dashboard'>Dashboard</router-link></li>
            <li><router-link to='/admin/users/index'>User list</router-link></li>
            <br>
            <li><router-link to='/admin/users/add'>User add</router-link></li>
        </ul>
    </div>

</template>



<script>
export default {
    name: 'AdminNav'
}
</script>

<style>
ul {
    list-style: none;
    padding-left: 0px;
    margin-right: 10px;
}

ul li {
    text-align: left;
}
</style>

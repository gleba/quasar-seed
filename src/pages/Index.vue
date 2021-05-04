<template>
    <div class="container">
        <h1>Home page</h1>
        <Fx/>
        <q-btn to="/home">To Home page</q-btn>
    </div>
</template>
<script>
import {Fx} from "../components/Fx";

export default {
    components:{Fx}
}
</script>

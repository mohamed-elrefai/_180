<template>
   <!-- navbar -->
    <nav class="shadow-sm bg-slate-800">
        <div class="container px-4 mx-auto flex items-center py-3">
            <!-- logo -->
            <div class="text-white lg:w-44 w-40">
                <router-link to="/"><i class="fa-brands fa-42-group"></i> D<span class=" text-red-500">A</span>RK</router-link>
            </div>
            <!-- logo end -->

            <!-- navlinks -->
            <div class="ml-12 lg:flex space-x-5  hidden">
                <a href="#"
                    class="flex items-center font-semibold text-sm text-white transition hover:text-gray-500">
                    <span class="mr-2">
                        <i class="fas fa-home"></i>
                    </span>
                    Home
                </a>
                <a href="#"
                    class="flex items-center font-semibold text-sm text-white transition hover:text-gray-500">
                    <span class="mr-2">
                        <i class="far fa-file-alt"></i>
                    </span>
                    About
                </a>
                <a href="#"
                    class="flex items-center font-semibold text-sm text-white transition hover:text-gray-500">
                    <span class="mr-2">
                        <i class="fas fa-phone"></i>
                    </span>
                    Contact
                </a>
            </div>
            <!-- navlinks end -->

            <!-- searchbar -->
            <div class="relative lg:ml-auto hidden lg:block">
                <span class="absolute left-3 top-2 text-sm text-w-500">
                    <i class="fas fa-search"></i>
                </span>
                <input type="text"
                    class="block w-full shadow-sm border-none rounded-3xl  pl-11 pr-2 py-2 focus:outline-none bg-gray-50 text-sm text-gray-700 placeholder-gray-500"
                    placeholder="Search">
            </div>
            <div class="lg:ml-5 ml-auto">
                <router-link to="/signup"
                    class=" text-sm  font-semibold text-white hover:text-blue-500 transition flex items-center">
                    <span class="mr-2">
                        <i class="far fa-user"></i>
                    </span>
                    Register
                    </router-link>
                    <a href="#"
                    class=" text-sm  font-semibold text-white hover:text-blue-500 transition flex items-center">
                    <span class="mr-2">
                        <i class="far fa-user"></i>
                    </span>
                    Login/Register
                    </a>
            </div>
            <div class="text-xl text-gray-700 cursor-pointer ml-4 xl:hidden block hover:text-blue-500 transition" id="open_sidebar">
                <i class="fas fa-bars"></i>
            </div>
            <!-- searchbar end -->

        </div>
    </nav>
</template>

<script>
// @ is an alias to /src
export default {
    name: 'NavebarVue',

}
</script>
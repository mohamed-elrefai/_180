<template>
     <!-- left sidebar -->
            <div class="w-3/12 hidden xl:block">
                <!-- categories -->
                <div class="w-full bg-slate-800 shadow-sm rounded-lg p-4 ">
                    <h3 class="text-xl font-semibold text-gray-700 mb-3 font-roboto">Categories</h3>
                    <div class="space-y-2">
                        <a href="#"
                            class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                            <span class="mr-2">
                                <i class="far fa-folder-open"></i>
                            </span>
                            <span>Beauti</span>
                            <p class="ml-auto font-normal">(12)</p>
                        </a>
                        <a href="#"
                            class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                            <span class="mr-2">
                                <i class="far fa-folder-open"></i>
                            </span>
                            <span>Business</span>
                            <p class="ml-auto font-normal">(15)</p>
                        </a>
                        <a href="#"
                            class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                            <span class="mr-2">
                                <i class="far fa-folder-open"></i>
                            </span>
                            <span>Fashion</span>
                            <p class="ml-auto font-normal">(5)</p>
                        </a>
                        <a href="#"
                            class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                            <span class="mr-2">
                                <i class="far fa-folder-open"></i>
                            </span>
                            <span>Food</span>
                            <p class="ml-auto font-normal">(10)</p>
                        </a>
                        <a href="#"
                            class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                            <span class="mr-2">
                                <i class="far fa-folder-open"></i>
                            </span>
                            <span>Learn</span>
                            <p class="ml-auto font-normal">(3)</p>
                        </a>
                        <a href="#"
                            class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                            <span class="mr-2">
                                <i class="far fa-folder-open"></i>
                            </span>
                            <span>Music</span>
                            <p class="ml-auto font-normal">(7)</p>
                        </a>
                        <a href="#"
                            class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                            <span class="mr-2">
                                <i class="far fa-folder-open"></i>
                            </span>
                            <span>Nature</span>
                            <p class="ml-auto font-normal">(0)</p>
                        </a>
                        <a href="#"
                            class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                            <span class="mr-2">
                                <i class="far fa-folder-open"></i>
                            </span>
                            <span>People</span>
                            <p class="ml-auto font-normal">(13)</p>
                        </a>
                        <a href="#"
                            class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                            <span class="mr-2">
                                <i class="far fa-folder-open"></i>
                            </span>
                            <span>Sports</span>
                            <p class="ml-auto font-normal">(7)</p>
                        </a>
                        <a href="#"
                            class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                            <span class="mr-2">
                                <i class="far fa-folder-open"></i>
                            </span>
                            <span>Technology</span>
                            <p class="ml-auto font-normal">(17)</p>
                        </a>
                    </div>
                </div>

                <!-- random posts -->
                <div class="w-full mt-8 bg-slate-800 shadow-sm rounded-lg p-4 ">
                    <h3 class="text-xl font-semibold text-gray-700 mb-3 font-roboto">Random Posts</h3>
                    <div class="space-y-4">
                        <a href="#" class="flex group">
                            <div class="flex-shrink-0">
                                <img src="src/images/img-1.jpg" class="h-14 w-20 rounded object-cover">
                            </div>
                            <div class="flex-grow pl-3">
                                <h5
                                    class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                    Team Bitbose geared up to attend Blockchain
                                </h5>
                                <div class="flex text-gray-400 text-sm items-center">
                                    <span class="mr-1 text-xs"><i class="far fa-clock"></i></span>
                                    June 11, 2021
                                </div>
                            </div>
                        </a>
                        <a href="#" class="flex group">
                            <div class="flex-shrink-0">
                                <img src="src/images/img-2.jpg" class="h-14 w-20 rounded object-cover">
                            </div>
                            <div class="flex-grow pl-3">
                                <h5
                                    class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                    After a Caribbean Hurricane, the Battle
                                </h5>
                                <div class="flex text-gray-400 text-sm items-center">
                                    <span class="mr-1 text-xs"><i class="far fa-clock"></i></span>
                                    March 27, 2021
                                </div>
                            </div>
                        </a>
                        <a href="#" class="flex group">
                            <div class="flex-shrink-0">
                                <img src="src/images/img-3.jpg" class="h-14 w-20 rounded object-cover">
                            </div>
                            <div class="flex-grow pl-3">
                                <h5
                                    class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                    California sheriff’s deputy shot during ‘ambush’
                                </h5>
                                <div class="flex text-gray-400 text-sm items-center">
                                    <span class="mr-1 text-xs"><i class="far fa-clock"></i></span>
                                    Aprile 17, 2021
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: 'Lift',

}
</script>
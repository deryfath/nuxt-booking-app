<template>
  <div v-if="error">Error: {{ error.message }}</div>
  <div v-else>

  <section class="container mx-auto p-6 bg-white">
    <!-- Hotel Info Section -->
    <div class="flex flex-col md:flex-row items-center md:items-start space-x-6">
      <!-- Hotel Image -->
      <img
        :src="dataHotel.catalog.hero_image_url.ori"
        alt="Hotel Image"
        class="w-40 h-40 rounded-full object-cover"
      />

      <!-- Hotel Details -->
      <div class="mt-4 md:mt-0">
        <h1 class="text-2xl font-bold">{{dataHotel.name}} ⭐⭐⭐⭐⭐</h1>
        <p class="text-gray-600">{{toPascalCase(dataHotel.type)}}</p>
        <p class="text-gray-600">
          {{dataHotel.address_line}},  {{ dataHotel.catalog.city }},  {{ dataHotel.catalog.postal_code }}
        </p>

        <div class="flex items-center mt-2">
          <span
            class="text-white bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold"
          >
            {{ dataHotel.catalog.review_rating }}
          </span>
          <p class="ml-2 text-gray-700">Excellent · {{dataHotel.catalog.review_count}} reviews</p>
        </div>
      </div>
    </div>

    <!-- Tab Menu -->
    <div class="container mx-auto p-3 mt-6">
      <nav class="border-t-2 border-gray-200 flex justify-center space-x-8 mb-4">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="activeTab = tab"
          :class="[
            activeTab === tab
              ? 'border-blue-500 text-blue-500'
              : 'border-transparent text-gray-500 hover:text-gray-700',
            'py-4 px-6 text-sm font-medium border-t-2'
          ]"
        >
          {{ tab }}
        </button>
      </nav>
    </div>

    <!-- Tab Content -->
    <div>
      <div v-if="activeTab === 'DEALS'">
        <!-- Filter Options -->
        <div class="flex justify-center items-center space-x-4">
          <p class="font-medium">Filter rooms by:</p>
          <button
            class="flex items-center border px-4 py-3 rounded-full text-gray-600 hover:bg-gray-100"
          >
            🍽️ Free Breakfast
          </button>
          <button
            class="flex items-center border px-4 py-3 rounded-full text-gray-600 hover:bg-gray-100"
          >
            ✅ Free Cancellation
          </button>
        </div>
        
        <!-- card -->
        <HotelCard
          v-for="room in arrRoom"
          :key="room.roomId"
          :room="room"
          :roomType="roomType"
        />
      </div>

      <div v-else-if="activeTab === 'PHOTOS'">
        
        <div class="container mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div v-for="(item, index) in arrImg" :key="index" class="bg-white rounded shadow">
              <img :src="item" alt="Image" class="w-full h-48 object-cover rounded mb-2">
            </div>
          </div>
        </div>

      </div>

      <div v-else-if="activeTab === 'INFO'">
        <Info />

      </div>
    </div>

    
  </section>
  </div>

</template>

<script setup>
 import { toRef } from 'vue';


  const id = '9000248394';
  const { data, error } = await useAsyncData('multiFetch', async () => {
      const [response1, response2] = await Promise.all([
        $fetch(`https://project-technical-test-api.up.railway.app/property/content?id=${id}&include=room`),
        $fetch(`https://project-technical-test-api.up.railway.app/stay/availability/${id}?checkin=2025-03-04&checkout=2025-03-08&guest_per_room=2&number_of_room=1&run_price_check=false`)
      ]);

      return {
        data1: response1,
        data2: response2
      };
  });

  const data1 = toRef(data.value, 'data1');
  const data2 = toRef(data.value, 'data2');

  const firstKey = data1.value ? Object.keys(data1.value)[0] : null
  const dataHotel = firstKey ? data1.value[firstKey] : 'No data'

  const arrRoom = Object.entries(dataHotel.room).map(([key, value]) => ({
    id: key,
    ...value
  }))

  const roomType = data2.value ? data2.value.offer_list.slice(0, 5) : [];

  const roomImage = data2.value.offer_list.map(proxy => proxy.room_images.map(img => img.size_sm))

  let arrImg = []
  for(const idx in roomImage){
    for(const idx2 in roomImage[idx]){
      arrImg.push(roomImage[idx][idx2])
    }
  }

  const toPascalCase = (str) => {
  if (!str) return ''
    return str
      .split(' ') // Split by spaces
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter of each word
      .join(' ') // Join back into a single string
  }
</script>

<script>
import HotelCard from '~/components/HotelCard.vue';
import Info from '~/components/Info.vue';

export default {
  components: {
    HotelCard,
    Info
  },
  data() {
    return {
      tabs: ['DEALS', 'PHOTOS', 'INFO'],
      activeTab: 'DEALS',
    };
  },
};

</script>

<style scoped>
nav button {
  transition: border-color 0.3s, color 0.3s;
}
</style>

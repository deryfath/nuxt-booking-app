<template>
   <div class="mx-auto bg-white mt-4 mb-4">
          <div class="flex">
            <div class="w-1/3">
            <div class="relative">
              <img :alt="room.name" class="rounded-lg" height="200" width="300" :src="imageUrl1" />
              <button class="absolute bottom-2 left-2 bg-white text-black px-2 py-1 rounded-lg shadow-md">
              See Photos
              </button>
            </div>
            <div class="grid grid-cols-3 gap-1 mt-2 mr-11">
              <img alt="Hotel amenities" class="rounded-lg" height="100" :src="imageUrl2" width="100"/>
              <img alt="Hotel room view" class="rounded-lg" height="100" :src="imageUrl3" width="100"/>
              <img alt="Hotel bathroom" class="rounded-lg" height="100" :src="imageUrl4" width="100"/>
            </div>
            </div>
            <div class="w-2/3 p-4 border-2 rounded-lg">
            <div class="flex justify-between items-start">
              <div>
              <h2 class="text-xl font-semibold">
                {{room.name}}
              </h2>
              <div class="flex items-center text-gray-600 mt-1">
                <i class="fas fa-bed mr-2">
                </i>
                <span>
                {{ room.bed_groups[Object.keys(room.bed_groups)[0]].description }}
                </span>
                <span class="mx-2">
                ·
                </span>
                <span>
                {{ room.area.square_meters }} m²
                </span>
              </div>
              </div>
              <a class="text-blue-600" href="#">
              See details
              </a>
            </div>
            <div class="mt-4">
              
                <RoomCard
                  v-for="roomType in roomType"
                  :key="roomType.roomId"
                  :roomType="roomType"
                />
              
              
            </div>
            </div>
          </div>
      </div>
  </template>

<script setup>
import { onMounted, ref, defineProps } from 'vue';

const props = defineProps({
  room: {
    type: Object,
    required: true
  },
  roomType: {
    type: Object,
    required: true
  }
});

const imageUrl1 = ref('');
const imageUrl2 = ref('');
const imageUrl3 = ref('');
const imageUrl4 = ref('');

  onMounted(() => {
    if (props.room.images && props.room.images.length > 0) {
      const firstImageLinks = props.room.images[0].links;
      if (firstImageLinks && firstImageLinks['200px']) {
        imageUrl1.value = firstImageLinks['200px'].href;
      }
      const secondImageLinks = props.room.images[1].links;
      if (secondImageLinks && secondImageLinks['200px']) {
        imageUrl2.value = secondImageLinks['200px'].href;
      }
      const thirdImageLinks = props.room.images[2].links;
      if (thirdImageLinks && thirdImageLinks['70px']) {
        imageUrl3.value = thirdImageLinks['70px'].href;
      }
      const fourthImageLinks = props.room.images[3].links;
      if (fourthImageLinks && fourthImageLinks['70px']) {
        imageUrl4.value = fourthImageLinks['70px'].href;
      }
    }
  });

</script>

<script>
import RoomCard from '~/components/RoomCard.vue';

export default {
  components: {
    RoomCard,
  }
};
</script>

<template>

<div class="border-t border-gray-200 pt-4">
              <div class="flex justify-between items-center">
                <div>
                <p class="text-gray-600">
                    {{ roomType.meal_plan_description ? roomType.meal_plan_description : 'Wihout Breakfast' }}
                </p>
                <p class="text-green-600">
                  {{ roomType.cancel_policy_description }}
                </p>
                <p class="text-xl font-semibold">
                   {{ formatCurrency(roomType.rate_nightly) }}
                  <span class="text-sm text-gray-600">
                  / night *
                  </span>
                </p>
                <p class="text-gray-600">
                  Total · {{ formatCurrency(roomType.price_total) }}
                </p>
                <p class="text-gray-400 text-sm">
                  after tax &amp; fees
                </p>
                <p class="text-gray-400 text-sm">
                  * Member-only price, valid in app only
                </p>
                </div>
                <div class="flex items-center">
                <i class="far fa-copy text-gray-600 mr-4">
                </i>
                <button class="bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Book Now
                </button>
                </div>
              </div>
              </div>
</template>

<script setup>

 defineProps({
    roomType: {
      type: Object,
      required: true
    }
  })

  const formatCurrency = (amount) => {
  return new Intl.NumberFormat('id-id', {
    style: 'currency',
    currency: 'IDR',
  }).format(amount);
}

</script>
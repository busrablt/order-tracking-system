<template>
  <div id="delivery-details">
    <div class="delivery-details">
      <div class="delivery-details__header">Delivery Details</div>
      <table aria-describedby="Delivery Details">
        <thead>
          <tr>
            <th width="60%" scope="col">Order Item</th>
            <th width="30%" scope="col">Number</th>
            <th width="20%" scope="col">Cost</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="details.length">
            <tr v-for="(detail, key) in details" :key="key">
              <td data-label="Order detail">{{ detail.value }}</td>
              <td data-label="Number">{{ detail.amount }}</td>
              <td data-label="Cost">{{ calculateCost(detail) }}$</td>
            </tr>
          </template>
          <template v-else>
            <tr>
              <td data-label="Order Item">-</td>
              <td data-label="Number">-</td>
              <td data-label="Cost">-</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div class="total-amount">
      <span class="bold">Total Amount:</span>
      <span>{{ calculateTotalAmount }}</span>
    </div>
  </div>
</template>

<script>
import helpers from "@/utils/helpers";
export default {
  name: "DeliveryDetails",
  props: {
    details: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      calculateCost: helpers.calculateCost,
    };
  },
  computed: {
    calculateTotalAmount() {
      if (this.details.length) {
        const totalCost = this.details.reduce((cal, detail) => {
          return cal + this.calculateCost(detail);
        }, 0);
        return `${totalCost}$`;
      }
      return "-";
    },
  },
  watch: {
    calculateTotalAmount(value) {
      this.$emit("totalAmount", value);
    },
  },
};
</script>
<style lang="scss" scoped>
.delivery-details {
  background: #f6f6f6;
  border-radius: 5px;
  padding: 24px;

  &__header {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 28px;
  }

  table {
    width: 100%;
    table-layout: fixed;
  }

  table tr {
    background-color: #f8f8f8;
    border: none;
    padding: 5px;
  }

  table th {
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: $dark-gray;
    text-align: left;
  }

  table td {
    font-weight: 500;
    font-size: 17px;
    line-height: 21px;
    text-align: left;
    padding: 2px 0 7px;
  }
}
.total-amount {
  margin-top: 29px;
  background: #f6f6f6;
  border-radius: 5px;
  padding: 22px 67px 22px 22px;
  display: flex;
  align-content: center;
  justify-content: space-between;

  span {
    font-size: 18px;
  }
  .bold {
    font-weight: 600;
  }
}
@media screen and (max-width: map-get($breakpoints, "md")) {
  table thead {
    position: absolute;
    overflow: hidden;
    width: 2px;
  }

  table tr {
    display: block;
    margin-bottom: 15px;
  }

  table td {
    display: block;
    text-align: right;
  }

  table td::before {
    content: attr(data-label);
    font-weight: 700;
    margin-right: 10px;
  }
}
</style>

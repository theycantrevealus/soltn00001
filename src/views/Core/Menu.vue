<template>
  <div class="p-grid">
    <div class="p-col-12">
      <Card>
        <template #title>
          Menu Management
        </template>
        <template #content>
          <TreeTable :value="nodes" :paginator="true" :rows="20">
            <Column field="label" header="Label" :expander="true"></Column>
            <Column field="to" header="Link"></Column>
            <Column field="icon" header="Action"></Column>
            <Column headerStyle="width: 8em" bodyStyle="text-align: center">
              <template #header>
                Action
              </template>
              <template #body>
                <span class="p-buttonset">
                  <Button type="button" icon="pi pi-search" class="p-button-success p-button-raised p-button-sm" style="margin-right: .5em"></Button>
                  <Button type="button" icon="pi pi-pencil" class="p-button-warning p-button-raised p-button-sm"></Button>
                </span>
              </template>
            </Column>
            <template #footer>
              <div style="text-align:left">
                <Button icon="pi pi-refresh" />
              </div>
            </template>
          </TreeTable>
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from 'primevue/card'
import TreeTable from 'primevue/treetable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import { mapActions, mapGetters } from 'vuex'

export default defineComponent({
  name: 'Module',
  components: {
    Card, TreeTable, Column, Button
  },
  data () {
    return {
      nodes: {
        data: []
      },
      columns: [
        { field: 'label', header: 'Vin', expander: true },
        { field: 'to', header: 'Size' },
        { field: 'icon', header: 'Type' }
      ],
      expandedKeys: {}
    }
  },
  mounted () {
    this.getMenu().then((data: any) => {
      this.nodes = data.data.response_package.root
    })
  },
  computed: {
    ...mapGetters({
      data: 'mCoreMenu/getData'
    })
  },
  methods: {
    ...mapActions({
      getMenu: 'mCoreMenu/get_all_menu'
    })
  }
})
</script>

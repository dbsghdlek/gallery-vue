import dayjs from 'dayjs';
import type { routes } from 'vue-router/auto-routes'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $dayjs: typeof dayjs;
    $route: typeof routes;
  }
}

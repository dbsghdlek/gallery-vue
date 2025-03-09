import dayjs from 'dayjs';
import type { RouteRecordRaw } from 'vue-router'
import type { Router } from 'vue-router';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $dayjs: typeof dayjs;
    $route: typeof RouteRecordRaw;
    $router: typeof Router;
  }
}

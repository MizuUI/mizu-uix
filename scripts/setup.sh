#!/bin/bash

case $1 in
    ng)
        cd submodules/primeng && pnpm run setup && \
        cd apps/showcase && pnpm link @mizuuix/styled @mizuuix/styles @mizuuix/themes @mizuuix/utils @mizuuix/motion --global && \
        cd ../../packages/themes && pnpm link @mizuuix/themes @mizuuix/styles --global && \
        cd ../primeng && pnpm link @mizuuix/styled @mizuuix/styles @mizuuix/themes @mizuuix/utils @mizuuix/motion --global
        ;;
    vue)
        cd submodules/primevue && pnpm run setup && \
        cd apps/showcase && pnpm link @mizuuix/themes @mizuuix/styles --global && \
        cd ../../packages/core && pnpm link @mizuuix/styled @mizuuix/utils --global && \
        cd ../themes && pnpm link @mizuuix/themes @mizuuix/styles --global && \
        cd ../primevue && pnpm link @mizuuix/styled @mizuuix/styles @mizuuix/themes @mizuuix/utils --global && \
        cd ../forms && pnpm link @mizuuix/forms @mizuuix/utils --global
        ;;
    react)
        cd submodules/primereact && pnpm run setup && \
        cd apps/showcase && pnpm link @mizuuix/styled @mizuuix/styles @mizuuix/themes @mizuuix/motion --global && \
        cd ../../packages/core && pnpm link @mizuuix/styled @mizuuix/utils --global && \
        cd ../headless && pnpm link @mizuuix/styled @mizuuix/utils --global && \
        cd ../hooks && pnpm link @mizuuix/utils --global && \
        cd ../primereact && pnpm link @mizuuix/styled @mizuuix/styles @mizuuix/utils @mizuuix/motion --global && \
        cd ../styles && pnpm link @mizuuix/styled @mizuuix/styles @mizuuix/utils --global && \
        cd ../types && pnpm link @mizuuix/styled --global
        ;;
    *)
        echo "Usage: $0 {ng|vue|react}"
        exit 1
        ;;
esac

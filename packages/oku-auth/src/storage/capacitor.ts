import { Storage } from '@capacitor/storage'
import { AuthOptions, AuthStorageAsync } from '../types/index'
export class CapacitorStorage implements AuthStorageAsync {
  async set(key: string, value: any) {
    await Storage.set({ key, value: JSON.stringify(value) })
  }

  async get(key: string, defaultValue: any) {
    try {
      const { value } = await Storage.get({ key })
      return JSON.parse(value!)
    }
    catch {
      return defaultValue
    }
  }

  async remove(key: string) {
    await Storage.remove({ key })
  }

  async clear(options: AuthOptions) {
    await Storage.remove({ key: options.token.storageName })
    await Storage.remove({ key: options.user.storageName })
    await Storage.remove({ key: options.expiredStorage })
    await Storage.remove({ key: options.refreshToken.storageName })
  }
}

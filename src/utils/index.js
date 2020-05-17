import AsyncStorage from '@react-native-community/async-storage';

export const asyncStorageGetWrapper = (key) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key)
      .then(res => res ? resolve(res) : reject(`no data in storage by key ${key}`))
      .catch(reject);
  });
};

export const asyncStorageSetWrapper = (key, value) => AsyncStorage.setItem(key, value);

export function uuid() {
  const xxx = Math.random().toString(32).substring(2);
  const yyy = Math.random().toString(32).substring(2);
  const zzz = Math.random().toString(32).substring(2);

  return `${xxx}-${yyy}-${zzz}`;
};

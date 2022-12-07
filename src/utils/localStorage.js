import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    alert(e);
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    alert(e);
  }
};

export const removeValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    alert(e);
  }

  console.log(key + ' removed');
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    alert(e);
  }

  console.log('Clear done.');
};

export const setValue = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    alert(e);
  }

  console.log('Done.');
};

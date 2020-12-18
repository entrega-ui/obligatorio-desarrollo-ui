import { useNavigation, useTheme } from '@react-navigation/native';
import ProgressBar from 'react-native-progress/Bar'
import React, { useCallback, useEffect, useMemo } from 'react';
import { Image, Text, View ,TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '_actions/UserActions';
import { Button } from '_components';
import strings from '_localization';
import styles from '_screens/Profile/Profile.styles';
import { TextStyles } from '_theme';
import { NAVIGATION } from '_constants';
import { myItems } from '_actions/ItemActions';
import goldImage from '../../assets/gold.png'

const MEDAL_ITEMS = 10;

function Profile() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  var items = useSelector(state => state.item.myItems);

  useEffect(() => {
    dispatch(myItems())
  }, [dispatch])

  const handleGoMyItems = useCallback(() => {
    dispatch(myItems())
    navigation.navigate(NAVIGATION.myItems)
  }, [navigation, dispatch, myItems])

  const logoutUser = () => {
    dispatch(logout());
  };

  const itemsRemainingForMedal = useMemo(() => MEDAL_ITEMS - items.length, [items])
  const progress = useMemo(() => {
    if (items.length >= MEDAL_ITEMS) return 1;
    return items.length / MEDAL_ITEMS
  }, [items])

  return (
    <View style={styles.container}>
      <View style={{
        backgroundColor: '#adcbf7',
        borderRadius: 5,
        padding: 20,
        justifyContent: 'center',
        display: 'flex',
        width: '100%',
        alignItems: 'center'
      }}>
        <Text style={{ fontSize: 30 }}>
          {itemsRemainingForMedal} ITEMS REMAINING!
        </Text>
        <Text style={{ color: '#535a66', paddingVertical: 15 }}>
          Keep on creating items in order to complete your golds
        </Text>
        <ProgressBar progress={progress} width={320} />
        <Text style={{ color: '#535a66', paddingTop: 10 }}>
          {`${items.length} / ${MEDAL_ITEMS}`}
        </Text>

        <TouchableOpacity 
          onPress={() => navigation.navigate(NAVIGATION.createItem)} 
          style={{marginTop: 10, borderRadius: 5, borderWidth: 1, padding:5, width: '100%', justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>Go and add more items!</Text>
          </TouchableOpacity>
      </View>
      <View style={{ display: 'flex', width: '100%' }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: '#f5b282', borderRadius: 5, padding: 10 }}>
          <Image source={goldImage} style={{ width: 50, height: 80 }} />
          <Text style={{ margin: 10, width: '72%', textAlign: 'center', color: '#535a66' }}>Create 10 items to earn this your first medal</Text>
        </View>
      </View>
      <Button title={strings.profile.myItems} onPress={handleGoMyItems} />
      <Button title={strings.profile.logout} onPress={logoutUser} />
    </View>
  );
}

export default Profile;

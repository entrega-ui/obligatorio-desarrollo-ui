import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 16,
  },
  listContainer: {
    width: '100%',
  },
  itemContainer: {
    width: '100%',
    margin: 8,
    padding: 16,
    borderRadius: 12,
  },
  secondaryButton: {
    marginHorizontal: '10%',
    marginTop: 16,
    width: '80%',
  },
  scrollView: {
    width: '100%'
  },
  itemImage: {
    width: '80%',
    height: 120,
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: 4,
    marginBottom: 8,
    borderRadius: 12,
  },
  scrollView: {
    
  }
});

export default styles;

public class IntegerSet {
  private boolean[] set;
  private static final int MAX_SET_VALUE = 100;

  public IntegerSet(){
    set = new boolean[MAX_SET_VALUE + 1];
  }
  public IntegerSet(int[] arr){
    set = new boolean[MAX_SET_VALUE + 1];
    for (int i = 0; i < arr.length; i++){
      if (arr[i] >= 0 && arr[i] <= MAX_SET_VALUE){
        set[arr[i]] = true;
      }
    }
  }
  public boolean isEqualTo(IntegerSet other){
    for (int i = 0; i < set.length; i++){
      if (set[i] != other.set[i]){
        return false;
      }
    }
    return true;
  }
}
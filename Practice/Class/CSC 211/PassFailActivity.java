public class PassFailActivity extends GradedActivity {
  double cutOffGrade;
  public PassFailActivity(double cutOffScore, double score){
    super();
    this.cutOffGrade = cutOffScore;
    setScore(score);
  }
  @Override
  public char getGrade(){
    char grade;
    if(getScore() >= cutOffGrade){
      grade  = 'P';
    } else{
      grade = 'F';
    }
    return grade;
  }
}
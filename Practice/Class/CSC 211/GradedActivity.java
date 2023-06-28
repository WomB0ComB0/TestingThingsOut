public class GradedActivity {
  private double score;
  public GradedActivity(){
    this.score = 0.0;
  }
  public void setScore(double s){
    this.score = s;
  }
  public void setScore(String s){
    this.score = Double.parseDouble(s);
  }
  public double getScore(){
    return score;
  }
  public char getGrade(){
    char grade;
    if(score >= 90){
      grade = 'A';
    } else if(score >= 80){
      grade = 'B';
    } else if(score >= 70){
      grade = 'C';
    } else if(score >= 60){
      grade = 'D';
    } else{
      grade = 'F';
    }
    return grade;
  }
}

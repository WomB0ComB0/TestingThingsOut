public class CurvedActivity extends GradedActivity {
  private double percentCurve;
  private double rawScore;
  public CurvedActivity(double percentCurve, double rawScore){
    this.percentCurve = percentCurve;
    this.rawScore = rawScore;
    setScore(rawScore * (1.0 + percentCurve));
  }
  public double getRawScore(){
    return this.rawScore;
  }
  public double getPercentCurve(){
    return this.percentCurve;
  }
}
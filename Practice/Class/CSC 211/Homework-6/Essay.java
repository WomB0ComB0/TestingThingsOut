public class Essay extends GradedActivity {
  private double grammar;
  private double spelling;
  private double correctLength;
  private double content;
  public void setScore( double gr, double sp, double len, double cnt){
    this.grammar = gr;
    this.spelling = sp;
    this.correctLength = len;
    this.content = cnt;
    super.setScore( gr + sp + len + cnt );
  }
  public void setGrammar(double g){
    this.grammar = g;
  }
  public void setSpelling(double s){
    this.spelling = s;
  }
  public void setCorrectLength(double c){
    this.correctLength = c;
  }
  public void setContent(double c){
    this.content = c;
  }
  public double getGrammar(){
    return this.grammar;
  }
  public double getSpelling(){
    return this.spelling;
  }
  public double getCorrectLength(){
    return this.correctLength;
  }
  public double getContent(){
    return this.content;
  }
  public double getScore(){
    return super.getScore();
  }
}
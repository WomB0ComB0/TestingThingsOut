public class CourseGrades {
  private GradedActivity[] grades = new GradedActivity[4];

  public void setLab(GradedActivity lab) {
    grades[0] = lab;
  }
  public void setPassFailExam(PassFailExam exam) {
    grades[1] = exam;
  }
  public void setEssay(Essay essay) {
    grades[2] = essay;
  }
  public void setFinalExam(FinalExam exam) {
    grades[3] = exam; 
  }
  public String toString() {
    String str = "";
    for (int i = 0; i < grades.length; i++) {
      str += grades[i].toString() + "\n";
    }
    return str;
  }
}
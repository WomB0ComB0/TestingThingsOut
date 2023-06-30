public class GradeDriver {
  public static void main(String[] args){

    System.out.println("main(): entry point");

    GradedActivity attendance = new GradedActivity();
    attendance.setScore(90.0);

    System.out.printf("Attendance score is %f\n", attendance.getScore());
    System.out.printf("Attendance grade is %c\n", attendance.getGrade());

    GradedActivity capStoneProject = new GradedActivity();
    capStoneProject.setScore("67.9");

    System.out.printf("Capstone Project score is %f\n", capStoneProject.getScore());
    System.out.printf("Capstone Project grade is %c\n", capStoneProject.getGrade());

    CurvedActivity quiz1 = new CurvedActivity(0.10, 70);
    System.out.printf("Quiz 1 score is %f\n", quiz1.getRawScore());
    System.out.printf("Quiz 1 curved score is %f\n", quiz1.getScore());
    System.out.printf("Quiz 1 grade is %c\n", quiz1.getGrade());

    PassFailActivity quiz2 = new PassFailActivity(70.0, 56.0);
    System.out.printf("Quiz 2 score is %f\n", quiz2.getScore());
    System.out.printf("Quiz 2 pass/fail grade is %c\n", quiz2.getGrade());

    GradedActivity[] grades = new GradedActivity[4];;

    grades[0] = attendance;
    grades[1] = capStoneProject;
    grades[2] = quiz1;
    grades[3] = quiz2;

    System.out.println("\nmain(): exit point");
  }
}

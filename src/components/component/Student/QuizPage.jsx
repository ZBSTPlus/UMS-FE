import DynamicPage from "../../ui/DynamicPage";
const QuizPage = ({ classes }) => {
  return (
    <DynamicPage classes={classes} isAssessment={false} isPractice={false} />
  );
};

export default QuizPage;

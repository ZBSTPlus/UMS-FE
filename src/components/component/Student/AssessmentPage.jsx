import DynamicPage from "../../ui/DynamicPage";

const AssessmentPage = ({ classes }) => {
  return (
    <DynamicPage classes={classes} isAssessment={true} isPractice={false} />
  );
};

export default AssessmentPage;

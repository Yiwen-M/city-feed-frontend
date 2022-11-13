import Header from '../components/UI/Header/Header';
import PageWrapper from '../components/UI/PageWrapper/PageWrapper';
import CreateForm from '../components/UI/CreatePostForm/CreatePostForm';

const CreatePost = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <CreateForm />
      </PageWrapper>
    </>
  );
};

export default CreatePost;

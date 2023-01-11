import Header from '../components/UI/Header/Header';
import PageWrapper from '../components/UI/PageWrapper/PageWrapper';
import CreatePostForm from '../components/UI/CreatePostForm/CreatePostForm';

const CreatePost = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <CreatePostForm />
      </PageWrapper>
    </>
  );
};

export default CreatePost;

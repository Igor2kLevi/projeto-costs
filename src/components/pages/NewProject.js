import { useNavigate } from "react-router-dom";

import ProjectForm from "../project/ProjectForm";

function NewProject() {
  const navigate = useNavigate();

  function createPost(project) {
    //initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        // redirect
        navigate('/projects', {state: {message: 'Projeto criado com sucesso!'} })
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="w-96 mt-20 m-auto">
      <h1 className="text-4xl font-bold mb-8">Criar Projeto</h1>
      <p className="text-xl text-gray-400">
        Crie seu prejeto para depois adicionar os serviços
      </p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}

export default NewProject;

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { parse, v4 as uuidv4 } from "uuid";

import Loading from "../layout/Loading";
import Container from "../layout/Container"
import ProjectForm from "../project/ProjectForm";
import Message from "../layout/Message";
import ServiceForm from "../service/ServiceForm";
import ServiceCard from "../service/ServiceCard";

function Project() {
  const { id } = useParams();

  const [project, setProject] = useState([]);
  const [services, setServices] = useState([])
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [showServiceForm, setShowServiceForm] = useState(false)
  const [message, setMessage] = useState()
  const [type, setType] = useState()

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data)
          setServices(data.services)
        })
        .catch((err) => console.log(err));
    }, 300);
  }, [id]);

  function editPost(project) {

    if(project.budget < project.cost) {
      setMessage("O orçamento não pode ser menor que o custo do projeto!")
      setType("error")
      return false
    }

    fetch(`http://localhost:5000/projects/${project.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(project),
    })
    .then((resp) => resp.json())
    .then((data) => {
      setProject(data)
      setShowProjectForm(false)
      setMessage("Projeto atualizado!")
      setType("success")
    })
    .catch(err => console.log(err))

    setMessage("")
  }

  function createService(project) {

    const lastService = project.services[project.services.length - 1]

    lastService.id = uuidv4()

    const lastServiceCost = lastService.cost

    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

    if (newCost > parseFloat(project.budget)) {
      setMessage("Orçamento ultrapassado, verifique o valor do serviço")
      setType("error")
      project.services.pop()
      return false
    }

    project.cost = newCost

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(project)
    })
    .then((resp) => resp.json())
    .then((data) => {
      setShowServiceForm(false)
    }).catch((err) => console.log(err))

    setMessage("")
  }

  function removeService(id, cost) {

    const servicesUpdates = project.services.filter(
      (service) => service.id !== id
    )

    const projectUpdate = project

    projectUpdate.services = servicesUpdates
    projectUpdate.cost = parseFloat(projectUpdate.cost) - parseFloat(cost)

    fetch(`http://localhost:5000/projects/${projectUpdate.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(projectUpdate)
    })
    .then((resp) => resp.json())
    .then((data) => {
      setProject(projectUpdate)
      setServices(servicesUpdates)
      setMessage("Serviço removido com sucesso!")
      setType("success")
    })
    .catch(err => console.log(err))

    setMessage("")
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm)
  }

  return (
    <div>
      {project.name ? (
        <div className="p-8">
          <Container customClass="flex-col justify-start mr-96">
            {message && <Message type={type} msg={message} />}
            <div className="border-b border-gray-500 mb-5 pb-5 flex justify-between flex-wrap">
                <h1 className="bg-gray-900 text-yellow-500 p-2 font-bold text-4xl w-4/5">Projeto: {project.name}</h1>
                <button className="bg-gray-900 text-gray-200 py-2 px-4 rounded-lg transition ease-in-out delay-150 hover:text-yellow-500" onClick={toggleProjectForm}>{!showProjectForm ? "Editar projeto" : "Fechar"}</button>
                {!showProjectForm ? (
                    <div className="mt-4">
                        <p className="mb-2">
                            <span className="font-bold">Categoria:</span> 
                            {/* {project.category.name} */}
                        </p>
                        <p className="mb-2">
                            <span className="font-bold">Total de Orçamento:</span> R${project.budget}
                        </p>
                        <p className="mb-2">
                            <span className="font-bold">Total Utilizado:</span> R${project.cost}
                        </p>
                    </div>
                ) : (
                    <div>
                        <ProjectForm handleSubmit={editPost} btnText="Concluir edição" projectData={project} />
                    </div>
                )}
            </div>
            <div className="border-b border-gray-500 mb-5 pb-5 flex justify-between flex-wrap">
              <h2 className="font-bold text-3xl h-1 w-3/5 ">Adicione um serviço:</h2>
              <button className="bg-gray-900 text-gray-200 py-2 px-4 ml-72 rounded-lg transition ease-in-out delay-150 hover:text-yellow-500" onClick={toggleServiceForm}>{!showServiceForm ? "Adicionar serviço" : "Fechar"}</button>
              <div>
                {showServiceForm && <ServiceForm 
                  handleSubmit={createService}
                  btnText= "Adicionar Serviço"
                  projectData={project}/>}
              </div>
            </div>
            <h2 className="font-bold text-3xl mb-4">Serviços</h2>
            <Container customClass="justify-start">
                  {services.length > 0 &&
                    services.map((service) => (
                      <ServiceCard 
                        id={service.id}
                        name={service.name}
                        cost={service.cost}
                        description={service.description}
                        key={service.id}
                        handleRemove={removeService}
                      />
                    ))
                  }
                  {services.length === 0 && <p>Não há serviços cadastrados.</p>}
            </Container>
          </Container>
        </div>
      ) : (
        <div>
            <Loading/>
        </div>
      )}
    </div>
  );
}

export default Project;

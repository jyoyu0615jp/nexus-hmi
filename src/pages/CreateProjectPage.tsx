import {
  useState,
  type FormEvent,
} from 'react'

import {
  useNavigate,
} from 'react-router'

import BackLink from '../components/common/BackLink'

import {
  clients,
} from '../features/clients/data/clients'

import {
  vehicleModels,
} from '../features/vehicles/data/vehicleModels'

import '../styles/create-project.css'


function CreateProjectPage() {
  const navigate = useNavigate()

  const [
    projectName,
    setProjectName,
  ] = useState('')

  const [
    clientId,
    setClientId,
  ] = useState('')

  const [
    vehicleModelId,
    setVehicleModelId,
  ] = useState('')

  const [
    platform,
    setPlatform,
  ] = useState('IVI')

  const [
    market,
    setMarket,
  ] = useState('Japan')

  const [
    status,
    setStatus,
  ] = useState('Planning')

  const [
    startDate,
    setStartDate,
  ] = useState('')

  const [
    dueDate,
    setDueDate,
  ] = useState('')

  const [
    description,
    setDescription,
  ] = useState('')


  const selectedClientId =
    Number(clientId)


  const availableVehicles =
    vehicleModels.filter(
      (vehicle) =>
        vehicle.clientId ===
        selectedClientId,
    )


  function handleClientChange(
    value: string,
  ) {
    setClientId(value)
    setVehicleModelId('')
  }


  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault()


    const newProject = {
      name: projectName,
      clientId: Number(clientId),
      vehicleModelId:
        Number(vehicleModelId),
      platform,
      market,
      status,
      startDate,
      dueDate,
      description,
    }


    console.log(
      'Create project:',
      newProject,
    )


    navigate('/projects')
  }


  return (
    <div className="page">
      <BackLink to="/projects">
        プロジェクト一覧へ戻る
      </BackLink>


      <header className="page__header">
        <p className="page__eyebrow">
          PROJECT MANAGEMENT
        </p>


        <h1 className="page__title">
          新規プロジェクト
        </h1>


        <p className="page__description">
          新しいHMIプロジェクトの
          基本情報とスケジュールを登録します。
        </p>
      </header>


      <form
        className="create-project-form"
        onSubmit={handleSubmit}
      >
        <section className="create-project-section">
          <div className="create-project-section__header">
            <h2>
              基本情報
            </h2>

            <p>
              プロジェクトの基本情報を入力してください。
            </p>
          </div>


          <div className="create-project-grid">
            <div className="create-project-field create-project-field--full">
              <label htmlFor="project-name">
                プロジェクト名
                <span>*</span>
              </label>

              <input
                id="project-name"
                type="text"
                value={projectName}
                placeholder="例：Accord IVI Interface"
                required
                onChange={(event) =>
                  setProjectName(
                    event.target.value,
                  )
                }
              />
            </div>


            <div className="create-project-field">
              <label htmlFor="client">
                クライアント
                <span>*</span>
              </label>

              <select
                id="client"
                value={clientId}
                required
                onChange={(event) =>
                  handleClientChange(
                    event.target.value,
                  )
                }
              >
                <option value="">
                  クライアントを選択
                </option>

                {clients.map(
                  (client) => (
                    <option
                      key={client.id}
                      value={client.id}
                    >
                      {client.name}
                    </option>
                  ),
                )}
              </select>
            </div>


            <div className="create-project-field">
              <label htmlFor="vehicle-model">
                車両モデル
                <span>*</span>
              </label>

              <select
                id="vehicle-model"
                value={vehicleModelId}
                required
                disabled={!clientId}
                onChange={(event) =>
                  setVehicleModelId(
                    event.target.value,
                  )
                }
              >
                <option value="">
                  {clientId
                    ? '車両モデルを選択'
                    : '先にクライアントを選択'}
                </option>

                {availableVehicles.map(
                  (vehicle) => (
                    <option
                      key={vehicle.id}
                      value={vehicle.id}
                    >
                      {vehicle.code}
                      {' - '}
                      {vehicle.name}
                    </option>
                  ),
                )}
              </select>
            </div>


            <div className="create-project-field">
              <label htmlFor="platform">
                プラットフォーム
              </label>

              <select
                id="platform"
                value={platform}
                onChange={(event) =>
                  setPlatform(
                    event.target.value,
                  )
                }
              >
                <option value="IVI">
                  IVI
                </option>

                <option value="Meter">
                  Meter
                </option>

                <option value="ADAS">
                  ADAS
                </option>

                <option value="3D Model">
                  3D Model
                </option>
              </select>
            </div>


            <div className="create-project-field">
              <label htmlFor="market">
                市場
              </label>

              <select
                id="market"
                value={market}
                onChange={(event) =>
                  setMarket(
                    event.target.value,
                  )
                }
              >
                <option value="Japan">
                  日本
                </option>

                <option value="Global">
                  グローバル
                </option>

                <option value="China">
                  中国
                </option>

                <option value="North America">
                  北米
                </option>

                <option value="Europe">
                  欧州
                </option>
              </select>
            </div>


            <div className="create-project-field">
              <label htmlFor="status">
                ステータス
              </label>

              <select
                id="status"
                value={status}
                onChange={(event) =>
                  setStatus(
                    event.target.value,
                  )
                }
              >
                <option value="Planning">
                  計画中
                </option>

                <option value="In Progress">
                  進行中
                </option>

                <option value="Design Review">
                  デザインレビュー
                </option>

                <option value="Completed">
                  完了
                </option>
              </select>
            </div>
          </div>
        </section>


        <section className="create-project-section">
          <div className="create-project-section__header">
            <h2>
              スケジュール
            </h2>

            <p>
              プロジェクトの開始日と
              納期を設定します。
            </p>
          </div>


          <div className="create-project-grid">
            <div className="create-project-field">
              <label htmlFor="start-date">
                開始日
                <span>*</span>
              </label>

              <input
                id="start-date"
                type="date"
                value={startDate}
                required
                onChange={(event) =>
                  setStartDate(
                    event.target.value,
                  )
                }
              />
            </div>


            <div className="create-project-field">
              <label htmlFor="due-date">
                納期
                <span>*</span>
              </label>

              <input
                id="due-date"
                type="date"
                value={dueDate}
                min={startDate || undefined}
                required
                onChange={(event) =>
                  setDueDate(
                    event.target.value,
                  )
                }
              />
            </div>
          </div>
        </section>


        <section className="create-project-section">
          <div className="create-project-section__header">
            <h2>
              プロジェクト概要
            </h2>

            <p>
              プロジェクトの目的や
              作業内容を入力してください。
            </p>
          </div>


          <div className="create-project-field">
            <label htmlFor="description">
              説明
            </label>

            <textarea
              id="description"
              rows={5}
              value={description}
              placeholder="プロジェクトの概要、目的、担当範囲などを入力..."
              onChange={(event) =>
                setDescription(
                  event.target.value,
                )
              }
            />
          </div>
        </section>


        <div className="create-project-actions">
          <button
            className="create-project-cancel"
            type="button"
            onClick={() =>
              navigate('/projects')
            }
          >
            キャンセル
          </button>


          <button
            className="create-project-submit"
            type="submit"
          >
            プロジェクトを作成
          </button>
        </div>
      </form>
    </div>
  )
}


export default CreateProjectPage
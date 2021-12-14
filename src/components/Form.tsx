import { useState } from 'react';

import { useForm } from 'react-hook-form';

import styles from './Form.module.css';

type FormData = {
  message: string;
  targetPhone: number | null;
};

export interface ILinkMessage {
  fullUrl: string;
}

const defaultValues: FormData = {
  message: '',
  targetPhone: null,
};

const Form = () => {
  const initialUrl = 'https://wa.me/';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });
  const [generatedLink, setGeneratedLink] = useState<string | null>(null);
  const [showGeneratedLink, setShowGeneratedLink] = useState<boolean>(false);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    console.log('Generando enlace');
    const urlEncodedMessage = encodeURI(data.message);
    const targetPhone = data.targetPhone;
    let fullUrl = `${initialUrl}${targetPhone}?text=${urlEncodedMessage}`;
    setGeneratedLink(fullUrl);
    setShowGeneratedLink(true);
    console.log(fullUrl);
    // reset(defaultValues);
  });

  const messageOptions = [
    {
      title: 'Ayuda localizar domicilio',
      message:
        'Hola soy de Mercado Libre y tengo un paquete para usted podría ayudarme a localizar su domicilio?',
    },
    {
      title: 'Corrección de datos',
      message:
        'Hola, soy de Mercado Libre, tengo un paquete para usted, podría ayudarme con datos de su domicilio?',
    },
    {
      title: 'Solicitar más referencias',
      message:
        'Hola, soy de Mercado Libre, tengo un paquete para usted, estoy cerca de su domicilio pero necesito mas referencias, podría ayudarme?',
    },
    {
      title: 'Acceso en caseta',
      message:
        'Hola, soy de Mercado Libre, tengo un paquete para usted, podría avisar a caseta para que me den acceso? o entrego el paquete en la caseta?',
    },
    {
      title: 'Salir por su paquete',
      message:
        'Hola, soy de Mercado Libre, tengo un paquete para usted, estoy frente a su domicilio, podría salir?',
    },
    {
      title: 'Nadie en casa',
      message:
        'Hola, soy de Mercado Libre, tengo un paquete para usted, estoy afuera de su domicilio pero no hay nadie, podría ayudarme?',
    },
    {
      title: 'Solicitar confirmación',
      message:
        'Hola, soy de Mercado Libre, acabo de hablar por teléfono con usted, podría confirmar que solicita que deje su paquete en este lugar?',
    },
  ];

  return (
    <>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.form_group}>
          <label htmlFor='targetPhone' className={styles.label}>
            Teléfono cliente
            <input
              type='tel'
              className={styles.input}
              id='targetPhone'
              aria-describedby='phoneHelp'
              placeholder='Número con código de país'
              {...register('targetPhone', {
                required: true,
                minLength: 14,
                maxLength: 14,
              })}
            />
          </label>
          {errors.targetPhone && (
            <span className={styles.text_danger}>
              El teléfono es requerido y debe ser de 14 incluyendo el +
            </span>
          )}
          <small id='phoneHelp' className={styles.muted}>
            Agrega el número de teléfono con código de país. Ejemplo:
            <strong className={styles.countryCode}>+521</strong>998012345
          </small>
        </div>

        <div className={styles.form_group}>
          <label htmlFor='selectedMessage' className={styles.label}>
            Mensaje
            <select
              className={styles.select}
              id='selectedMessage'
              {...register('message')}
            >
              <option value='' disabled>
                Selecciona un mensaje
              </option>
              {messageOptions.map((option) => (
                <option key={option.title} value={option.message}>
                  {option.title}
                </option>
              ))}
            </select>
          </label>
          <button type='submit' className={styles.btn_primary}>
            Generar enlace
          </button>
          {showGeneratedLink ? (
            <a href={`${generatedLink}`} className={styles.link}>
              Abrir WhatsApp
            </a>
          ) : null}
        </div>
      </form>
    </>
  );
};

export default Form;

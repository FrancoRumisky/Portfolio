import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { styled } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import s from "../Contact/Contact.module.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const {
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      asunto: "",
      message: "",
    },
    mode: "onBlur",
  });

  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = React.useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dbgvg01",
        "template_4ekxfic",
        form.current,
        "VUaQws9PrPNf5xuLC"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const onSubmit = (e) => {
    sendEmail(e);
    setOpen(true);
    reset({ name: "", email: "", asunto: "", message: "" });
  };

  const ValidationTextField = styled(TextField)({
    "& .MuiInputLabel-root.Mui-focused": {
      color: "white",
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiInputBase-multiline:hover fieldset": {
      borderColor: "var(--golden-color)",
    },
    "& .MuiInputBase-root.Mui-focused fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important",
      borderColor: "var(--golden-color)",
    },
    "& input:valid + fieldset": {
      borderColor: "green",
      borderWidth: 2,
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important",
      borderColor: "var(--golden-color)",
    },
    "& input:invalid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important",
      borderColor: "var(--golden-color)",
    },
    "& input:valid:hover + fieldset": {
      borderColor: "var(--golden-color)",
    },
    "& input:invalid:hover + fieldset": {
      borderColor: "var(--golden-color)",
    },
    "& input": {
      color: "white",
    },
    "& textarea": {
      color: "white",
    },
    "& textarea + fieldset": {
      borderColor: "green",
      borderWidth: 2,
    },
  });

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#ffb032e8"),
    backgroundColor: "#ffb032e8",
    // eslint-disable-next-line
    color: "white",
    height: "50px",
    "&:hover": {
      backgroundColor: "#f7a31ce8",
    },
  }));

  return (
    <div className={s.background}>
      <div className={s.formContainer}>
        <span className={s.contact}>
          <p>CON</p>
          <p>TACTO</p>
        </span>
        <form
          ref={form}
          onSubmit={onSubmit}
          className={s.form}
          autoComplete="off"
        >
          <Controller
            name="name"
            control={control}
            rules={{ required: "Campo requerido" }}
            render={({ field }) => (
              <>
                <ValidationTextField
                  {...field}
                  label="Nombre"
                  required
                  className={s.input}
                />
                <p className={s.errors}>{errors.nombre?.message}</p>
              </>
            )}
          />

          <Controller
            render={({ field }) => (
              <>
                <ValidationTextField
                  {...field}
                  label="Email"
                  required
                  type={"email"}
                  className={s.input}
                />
                <p className={s.errors}>{errors.email?.message}</p>
              </>
            )}
            name="email"
            control={control}
            rules={{
              required: "Campo requerido",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "ingrese un email valido",
              },
            }}
          />
          <Controller
            render={({ field }) => (
              <>
                <ValidationTextField
                  {...field}
                  label="Asunto"
                  required
                  className={s.input}
                />
                <p className={s.errors}>{errors.asunto?.message}</p>
              </>
            )}
            name="asunto"
            control={control}
            rules={{ required: "Campo requerido" }}
          />
          <Controller
            render={({ field }) => (
              <>
                <ValidationTextField
                  {...field}
                  label="Comentarios"
                  multiline
                  rows={4}
                  className={s.input}
                />
              </>
            )}
            name="message"
            control={control}
          />
          <span>Los campos con * son obligatorios</span>
          <ColorButton
            type="submit "
            variant="contained"
            endIcon={<SendIcon />}
          >
            Enviar
          </ColorButton>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            {success === false ? (
              <Alert
                onClose={handleClose}
                variant="filled"
                severity="error"
                sx={{ width: "100%" }}
              >
                Error al enviar su mensaje
              </Alert>
            ) : (
              <Alert
                onClose={handleClose}
                variant="filled"
                severity="success"
                sx={{ width: "100%" }}
              >
                Mensaje enviado con exito!
              </Alert>
            )}
          </Snackbar>
        </form>
      </div>
    </div>
  );
};

export default Contact;

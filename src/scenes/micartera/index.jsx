import { Box, Button, TextField, MenuItem } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import { useTheme } from "@mui/material";

const Micartera = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const columnVisibilityModel = {
    id: false,
  };

    const columns = [
{ field: "id", headerName: "ID", flex: 0.5 },

{ field: "cripto", headerName: "Cripto moneda", flex: 1,    headerAlign: "center",
align: "center",},

    {
      field: "cantidad",
      headerName: "Cantidad",
      flex: 1, 
      headerAlign: "center",
      align: "center",

    },
    {
      field: "precioCompra",
      headerName: "Precio Compra",
      type: "number",
      headerAlign: "center",
      align: "center",
      flex: 1
    },
    {
      field: "precioActual",
      headerName: "Precio Actual",
      type: "number",
      headerAlign: "center",
      align: "center",
      flex: 1
    },
    {
      field: "valorMercado",
      headerName: "Valor Mercado",
      type: "number",
      headerAlign: "center",
      align: "center",
      flex: 1
    },
  ];

  return (
    <> <Box m="20px">
    <Header title="Mi cartera" subtitle="Administración de posiciones" />

    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={checkoutSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >

          <TextField label='Select cripto moneda'
              select
            fullWidth
            
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.cripto}
              name="cripto"
              error={!!touched.cripto && !!errors.cripto}
              helperText={touched.cripto && errors.cripto}
              sx={{ gridColumn: "span 2" }}
            
            
            >
              
              <MenuItem value="BTC">BTC</MenuItem>
              <MenuItem value="ETH">ETH</MenuItem>
              <MenuItem value="ADA">ADA</MenuItem>
              <MenuItem value="LINK">LINK</MenuItem>
            </TextField>
            <TextField label='Select tipo'
              select
            fullWidth
            
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.tipo}
              name="tipo"
              error={!!touched.tipo && !!errors.tipo}
              helperText={touched.tipo && errors.tipo}
              sx={{ gridColumn: "span 2" }}
            
            
            >
              <MenuItem value="COMPRA">COMPRA</MenuItem>
              <MenuItem value="VENTA">VENTA</MenuItem>
            </TextField>


            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Cantidad"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.cantidad}
              name="cantidad"
              error={!!touched.cantidad && !!errors.cantidad}
              helperText={touched.cantidad && errors.cantidad}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Precio"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.precio}
              name="precio"
              error={!!touched.precio && !!errors.precio}
              helperText={touched.precio && errors.precio}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Comisión"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.comision}
              name="comision"
              error={!!touched.comision && !!errors.comision}
              helperText={touched.comision && errors.comision}
              sx={{ gridColumn: "span 1" }}
            />

      <Button type="submit" color="secondary" variant="contained">
              Añadir posición
            </Button>
           
          </Box>
          
        </form>
      )}
    </Formik>
  </Box> <Box m="20px">
  
    <Box
      m="40px 0 0 0"
      height="75vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700],
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[200]} !important`,
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${colors.grey[100]} !important`,
        },
      }}
    >
      <DataGrid
        rows={mockDataContacts}
        columns={columns}
        autoSizeColumns
        columnVisibilityModel={columnVisibilityModel}
        components={{ Toolbar: GridToolbar }}
      />
    </Box>
  </Box></>
    
  );
};


const checkoutSchema = yup.object().shape({
  cripto: yup.string().required("required"),
  tipo: yup.string().required("required"),
  fecha: yup.string().required("required"),
  cantidad: yup.string().required("required"),
  precio: yup
    .string().required("required"),
    comision: yup.string().required("required"),
  
});
const initialValues = {
  cripto: "",
  tipo: "",
  fecha: "",
  cantidad: "",
  precio: "",
  comision: "",
};

export default Micartera;

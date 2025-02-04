# VIDEOCLUB

## Form 1

![BD1](https://github.com/user-attachments/assets/b8412ede-4045-4fa6-a701-1af861d1292c)

```
Imports System.ComponentModel

Public Class Frm1
    'Abre el formulario de listado
    Private Sub BtnIniciar_Click(sender As Object, e As EventArgs) Handles BtnIniciar.Click
        mostrarFrm2()
    End Sub

    'Oculta el resto de formularios y realiza la conexión a la BD SQLite
    Private Sub Frm1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        ocultarFrm()
        ConectarBD()
    End Sub

    'Cierra el formulario
    Private Sub Frm1_Closing(sender As Object, e As CancelEventArgs) Handles Me.Closing
        cerrarFrm()
    End Sub

    'Muestra el formulario de listado cuando pase el tiempo del cronometro
    Private Sub Timer1_Tick(sender As Object, e As EventArgs) Handles Timer1.Tick
        mostrarFrm2()
    End Sub

    'Realiza la conexión a la BD de Access
    Private Sub btn_access_Click(sender As Object, e As EventArgs) Handles btn_access.Click
        ConectarBDAccess()
        DesconectarBDAccess()
    End Sub
End Class

```

## Form 2
![BD2](https://github.com/user-attachments/assets/67bf0413-fece-46c3-8865-be6ea8dc975a)

```
Imports System.ComponentModel

Public Class Frm2

    'Cierra el formulario
    Private Sub Frm2_Closing(sender As Object, e As CancelEventArgs) Handles Me.Closing
        cerrarFrm()
    End Sub

    'Muestra el formulario de consulta
    Private Sub btn_siguiente_Click(sender As Object, e As EventArgs) Handles btn_siguiente.Click
        mostrarFrm3()
    End Sub
End Class
```
## Form 3
![BD3](https://github.com/user-attachments/assets/4309497b-b28c-4b8e-81e4-7508ab9c1f11)

```
Imports System.ComponentModel

Public Class Frm3

    'Llama al procedimiento de consultar pelicula
    Private Sub btn_lupa_Click(sender As Object, e As EventArgs) Handles btn_lupa.Click
        consultarPelicula(Me)
    End Sub

    'Llama al procedimiento de siguiente pelicula
    Private Sub btn_siguiente_Click(sender As Object, e As EventArgs) Handles btn_siguiente.Click
        siguientePelicula(Me)
    End Sub

    'Llama al procedimiento de anterior pelicula
    Private Sub btn_anterior_Click(sender As Object, e As EventArgs) Handles btn_anterior.Click
        anteriorPelicula(Me)
    End Sub

    'Muestra el formulario anterior
    Private Sub btn_volver_Click(sender As Object, e As EventArgs) Handles btn_volver.Click
        mostrarFrm2()
    End Sub

    'Muestra el formulario de edición
    Private Sub btn_editar_Click(sender As Object, e As EventArgs) Handles btn_editar.Click
        mostrarFrm4()
    End Sub

    'Llama al procedimiento de deshabilitar formulario, ya que al ser modo consulta, no se debe poder modificar ningun campo
    Private Sub Frm3_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        deshabilitarFormulario(Me)
    End Sub
    'Llama al procedimiento de habilitar lupa cuando introducimos texto
    Private Sub IdPelicula_TextChanged(sender As Object, e As EventArgs) Handles IdPelicula.TextChanged
        habilitarLupa(Me)
    End Sub

    'Cierra el formulario
    Private Sub Frm3_Closing(sender As Object, e As CancelEventArgs) Handles Me.Closing
        cerrarFrm()
    End Sub
End Class
```
## Form 4
![BD4](https://github.com/user-attachments/assets/7ea23e6f-ad31-4dcd-ad5b-f44fd59f4f6f)

```
Imports System.ComponentModel

Public Class Frm4

    'Prepara el formulario para poder agregar una película
    Private Sub AgregarPelicula_Click(sender As Object, e As EventArgs) Handles AgregarPelicula.Click
        setModo(Me, AgregarPelicula.Tag)
        habilitarFormulario(Me)
    End Sub
    'Prepara el formulario para poder modificar los campos de una película
    Private Sub ModificarPelicula_Click(sender As Object, e As EventArgs) Handles ModificarPelicula.Click
        setModo(Me, ModificarPelicula.Tag)
        deshabilitarFormulario(Me)
    End Sub

    'Prepara el formulario para poder eliminar una película
    Private Sub EliminarPelicula_Click(sender As Object, e As EventArgs) Handles EliminarPelicula.Click
        setModo(Me, EliminarPelicula.Tag)
        deshabilitarFormulario(Me)
    End Sub

    'Llama al procedimento respectivo de BD según el modo en el que estemos
    Private Sub BtnAceptar_Click(sender As Object, e As EventArgs) Handles BtnAceptar.Click
        Dim campos_correctos = comprobarCampos(Me)
        If (campos_correctos = True) Then
            accionAceptar(Me)
        End If
        borrarForm(Me)
    End Sub

    'Limpia el formulario
    Private Sub BtnCancelar_Click(sender As Object, e As EventArgs) Handles BtnCancelar.Click
        borrarForm(Me)
    End Sub

    'Muestra el formulario anterior
    Private Sub btn_volver_Click(sender As Object, e As EventArgs) Handles btn_volver.Click
        mostrarFrm3()
    End Sub

    'Cierra el formulario
    Private Sub Frm4_Closing(sender As Object, e As CancelEventArgs) Handles Me.Closing
        cerrarFrm()
    End Sub
    'Llama al procedimiento de habilitar lupa cuando introducimos texto
    Private Sub IdPelicula_TextChanged(sender As Object, e As EventArgs) Handles IdPelicula.TextChanged
        habilitarLupa(Me)
    End Sub

    'Llama al procedimiento de consultar pelicula
    Private Sub btn_lupa_Click(sender As Object, e As EventArgs) Handles btn_lupa.Click
        consultarPelicula(Me)
    End Sub
End Class

```

## Module Procedimientos

```
Module ModuleProcedimientos

    Const APP_NAME = "Videoclub"
    Dim modo As String

    'Muestra el formulario de listado y oculta los otros que puedan estar abiertos
    Public Sub mostrarFrm2()
        Frm1.Timer1.Enabled = False
        Frm1.Hide()
        Frm3.Hide()
        Frm2.Show()
        setModo(Frm2, "Pelicula")
        presentarListado()
    End Sub
    'Muestra el formulario de consulta y oculta los otros que puedan estar abiertos
    Public Sub mostrarFrm3()
        Frm2.Hide()
        Frm4.Hide()
        Frm3.Show()
    End Sub
    'Muestra el formulario de edición y oculta los otros que puedan estar abiertos
    Public Sub mostrarFrm4()
        Frm3.Hide()
        Frm4.Show()
    End Sub
    'Oculta el resto de formularios distinto al inicial para que no se muestren los 4 al inicio
    Public Sub ocultarFrm()
        Frm2.Hide()
        Frm3.Hide()
        Frm4.Hide()
    End Sub
    'Desconecta las BD al salir de la aplicación y nos aseguramos que se cierra la apliación y que no quedan formularios ocultos
    Public Sub cerrarFrm()
        DesconectarBD()
        'DesconectarBDAccess()
        Application.Exit()
    End Sub
    'Establece el modo en el que nos encontramos en la aplicacion
    Public Sub setModo(form As Form, modo_string As String)
        modo = modo_string
        form.Text = APP_NAME + " -> " + modo
    End Sub
    'Forma el listado mostrado en el formulario de listado
    Public Sub presentarListado()
        If (modo.IndexOf("Pelicula") <> -1) Then
            Frm2.listado.Columns(0).Text = "ID"
            Frm2.listado.Columns(1).Text = "Titulo"
            Frm2.listado.Columns(2).Text = "Director"
            Frm2.listado.Columns(3).Text = "Actores"
            Frm2.listado.Columns(4).Text = "Descripcion"
            Frm2.listado.Columns(5).Text = "Calificacion"
            Frm2.listado.Columns(6).Text = "Genero"
        End If
        consultarTodos()
    End Sub
    'Deshabilita la opcion de editar los campos
    Public Sub deshabilitarFormulario(form As Form)
        Select Case form.Name
            Case "Frm4"
                Frm4.IdPelicula.Enabled = True
                Frm4.Calificacion.Enabled = False
                Frm4.genero.Enabled = False
                Frm4.titulo.Enabled = False
                Frm4.director.Enabled = False
                Frm4.actores.Enabled = False
                Frm4.descripcion.Enabled = False
                Frm4.BtnAceptar.Enabled = True
                Frm4.BtnCancelar.Enabled = True
            Case "Frm3"
                Frm3.IdPelicula.Enabled = True
                Frm3.Calificacion.Enabled = False
                Frm3.genero.Enabled = False
                Frm3.titulo.Enabled = False
                Frm3.director.Enabled = False
                Frm3.actores.Enabled = False
                Frm3.descripcion.Enabled = False
        End Select
    End Sub
    'Habilita la opción de editar los campos, exceptuando el id
    Public Sub habilitarFormulario(form As Form)
        Select Case form.Name
            Case "Frm4"
                Frm4.IdPelicula.Enabled = False
                Frm4.Calificacion.Enabled = True
                Frm4.genero.Enabled = True
                Frm4.titulo.Enabled = True
                Frm4.director.Enabled = True
                Frm4.actores.Enabled = True
                Frm4.descripcion.Enabled = True
                Frm4.BtnAceptar.Enabled = True
                Frm4.BtnCancelar.Enabled = True
                deshabilitarLupa(Frm4)
        End Select
    End Sub
    'Llama, según el modo en el que estemos, al procedimiento correspondiente de BD, al pulsar aceptar
    Public Sub accionAceptar(form As Form)
        Select Case modo
            Case "Agregar Pelicula"
                guardarPelicula()
            Case "Modificar Pelicula"
                modificarPelicula()
            Case "Eliminar Pelicula"
                confirmarBorrado(form)
        End Select
    End Sub
    'Habilita el botón de la lupa
    Public Sub habilitarLupa(form As Form)
        Select Case form.Name
            Case "Frm3"
                Frm3.btn_lupa.Enabled = True
            Case "Frm4"
                Frm4.btn_lupa.Enabled = True
        End Select
    End Sub
    'Deshabilita el botón de la lupa
    Private Sub deshabilitarLupa(form As Form)
        Select Case form.Name
            Case "Frm3"
                Frm3.btn_lupa.Enabled = False
            Case "Frm4"
                Frm4.btn_lupa.Enabled = False
        End Select
    End Sub
    'Llama al procedimiento de BD de consultar pelicula segun su id, y en el caso del formulario de edicion en modo modificar, 
    'lo habilita para poder editar los campos de la pelicula correspondiente
    Public Sub consultarPelicula(form As Form)
        Select Case form.Name
            Case "Frm3"
                If (Frm3.IdPelicula.Text <> "") Then
                    queryPelicula(Frm3.IdPelicula.Text, "consultar", form)
                Else
                    MsgBox("Introduce el ID")
                End If
            Case "Frm4"
                If (Frm4.IdPelicula.Text <> "") Then
                    queryPelicula(Frm4.IdPelicula.Text, "consultar", form)
                    habilitarFormulario(Frm4)
                Else
                    MsgBox("Introduce el ID")
                End If
        End Select
    End Sub
    'Llama al procedimiento de BD de consultar pelicula, indicandole que filtre por el siguiente id
    Public Sub siguientePelicula(form As Form)
        If (Frm3.IdPelicula.Text <> "") Then
            queryPelicula(Frm3.IdPelicula.Text, "siguiente", form)
        Else
            MsgBox("Introduce el ID")
        End If
    End Sub
    'Llama al procedimiento de BD de consultar pelicula, indicandole que filtre por el anterior id
    Public Sub anteriorPelicula(form As Form)
        If (Frm3.IdPelicula.Text <> "") Then
            queryPelicula(Frm3.IdPelicula.Text, "anterior", form)
        Else
            MsgBox("Introduce el ID")
        End If
    End Sub
    'Limpia el formulario
    Public Sub borrarForm(form As Form)
        Select Case form.Name
            Case "Frm4"
                Frm4.IdPelicula.Text = ""
                Frm4.Calificacion.Text = ""
                Frm4.genero.Text = ""
                Frm4.titulo.Text = ""
                Frm4.director.Text = ""
                Frm4.actores.Text = ""
                Frm4.descripcion.Text = ""
        End Select
    End Sub
    'Presenta una ventana emergente para confirmar el borrado de un registro en BD. Si se selecciona "si"
    'llama al procedimiento de BD de eliminar pelicula
    Private Sub confirmarBorrado(form As Form)
        Dim mensaje = MsgBox("esta seguro de eliminar los datos? ", MsgBoxStyle.YesNo)
        If (mensaje = MsgBoxResult.Yes) Then
            Select Case form.Name
                Case "Frm4"
                    eliminarPelicula()
            End Select
        End If
    End Sub
    'Comprueba antes de realizar una acción sobre la BD, que todos los campos requeridos estan debidamente rellenos
    Public Function comprobarCampos(form As Form) As Boolean
        Dim campos_correctos = True
        Select Case form.Name
            Case "Frm4"
                If (Frm4.Calificacion.Text = "" Or Frm4.genero.Text = "" Or
                        Frm4.titulo.Text = "" Or Frm4.director.Text = "" Or Frm4.actores.Text = "" Or
                        Frm4.descripcion.Text = "") Then
                    MsgBox("Rellena todos los campos")
                    campos_correctos = False
                End If
        End Select
        Return campos_correctos
    End Function

End Module
```
## Module BD

```
Imports System.Data
Imports System.Data.Common
Imports System.Data.OleDb
Imports System.Data.SQLite
Imports System.DirectoryServices
Module ModuleBD
    Public dataSource As String = Application.StartupPath & "Data\VideoClub.db"
    Public connection As String = "Data Source=" & dataSource & ";"
    Public SQLConn As New SQLiteConnection
    Public dataSourceAccess As String = Application.StartupPath & "Data\VideoClub.xlsx"
    Public connectionAccess As String = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=" & dataSourceAccess & ";Extended Properties='Excel 12.0 Xml;HDR=YES';"
    Public AccessConnection As New OleDbConnection
    'Realiza la conexión a la BD de SQLite
    Public Sub ConectarBD()
        SQLConn.ConnectionString = connection
        Try
            SQLConn.Open()
        Catch ex As Exception
            MsgBox(ex.ToString)
        End Try
    End Sub
    'Realiza la desconexión de la BD de SQLite
    Public Sub DesconectarBD()
        If SQLConn.State = ConnectionState.Open Then
            SQLConn.Close()
        Else
            MsgBox("No se puede cerrar")
        End If
    End Sub
    'Realiza la conexión a la BD de Access
    Public Sub ConectarBDAccess()
        AccessConnection.ConnectionString = connectionAccess
        Try
            AccessConnection.Open()
            MsgBox("conexion correcta")
        Catch ex As Exception
            MsgBox(ex.ToString)
        End Try
    End Sub
    'Realiza la desconexión de la BD de Access
    Public Sub DesconectarBDAccess()
        If AccessConnection.State = ConnectionState.Open Then
            AccessConnection.Close()
            MsgBox("desconexion correcta")
        Else
            MsgBox("No se puede cerrar")
        End If
    End Sub
End Module

```
## Module DAO

```
Imports System.Data.SQLite
Imports System.Runtime.InteropServices.JavaScript.JSType

Module ModuleDAO
    Public adapter As SQLiteDataAdapter = New SQLiteDataAdapter()
    Public fila As DataRow
    'Llama a las funciones de obtener todas las peliculas y con el resultado, llama al procedimiento de 
    'rellenar la tabla del formulario de listado
    Public Sub consultarTodos()
        Dim dataSet As DataSet = New DataSet()
        dataSet = querySelect()
        rellenarTabla(dataSet)
    End Sub
    'Obtiene los datos de la pelicula con el id recibido como parametro
    Public Sub queryPelicula(id As String, operacion As String, form As Form)
        Dim dataSet As DataSet = New DataSet()
        dataSet = querySelect()
        Dim IndiceAlum As Integer
        For position As Integer = 0 To dataSet.Tables(0).Rows.Count - 1
            If dataSet.Tables(0).Rows(position).Item(0).ToString = id Then
                Select Case operacion
                    Case "consultar"
                        IndiceAlum = position
                    Case "siguiente"
                        If (position + 1 <> dataSet.Tables(0).Rows.Count) Then
                            IndiceAlum = position + 1
                        Else
                            IndiceAlum = 0
                        End If
                    Case "anterior"
                        If (position <> 0) Then
                            IndiceAlum = position - 1
                        Else
                            IndiceAlum = dataSet.Tables(0).Rows.Count - 1
                        End If
                End Select
            End If
            visualizarRegistroDataAdapter(IndiceAlum, dataSet, form)
        Next

    End Sub
    'Realiza la sentencia SQL de eliminacion de la película correspondiente
    Public Sub eliminarPelicula()
        Dim dataSet As DataSet = New DataSet()
        dataSet = querySelect()
        Dim CadenaEliminarReg As String = "DELETE FROM pelicula WHERE id = @Id"
        Dim Comando = New SQLiteCommand(CadenaEliminarReg, SQLConn)
        adapter.DeleteCommand = Comando

        Comando.Parameters.AddWithValue("@Id", Frm4.IdPelicula.Text)
        adapter.Fill(DataSet, "pelicula")
        dataSet.Tables(0).Rows(0).Delete()

        Comando.Cancel()

        ActualizarBDPeliculas(dataSet)
    End Sub
    'Realiza la sentencia SQL de actualizacion de los valores de los campos de la película correspondiente
    Public Sub modificarPelicula()
        Dim dataSet As DataSet = New DataSet()
        dataSet = querySelect()
        Dim CadenaModificar As String = "UPDATE pelicula SET titulo=@Tit, director=@Dir, actores=@act, 
        sinopsis=@des, calificacion=@Cal, genero_id=@Gen WHERE id=@id"
        Dim Comando = New SQLiteCommand(CadenaModificar, SQLConn)
        adapter.UpdateCommand = Comando

        Comando.Parameters.AddWithValue("@Tit", Frm4.titulo.Text)
        Comando.Parameters.AddWithValue("@Dir", Frm4.director.Text)
        Comando.Parameters.AddWithValue("@Act", Frm4.actores.Text)
        Comando.Parameters.AddWithValue("@Des", Frm4.descripcion.Text)
        Comando.Parameters.AddWithValue("@Cal", Frm4.Calificacion.Text)
        Comando.Parameters.AddWithValue("@Gen", Frm4.genero.Text)
        Comando.Parameters.AddWithValue("@Id", Frm4.IdPelicula.Text)
        adapter.Fill(DataSet, "pelicula")
        dataSet.Tables(0).Rows(0).BeginEdit()
        dataSet.Tables(0).Rows(0).Item(1) = Frm4.titulo.Text
        dataSet.Tables(0).Rows(0).Item(2) = Frm4.director.Text
        dataSet.Tables(0).Rows(0).Item(3) = Frm4.actores.Text
        dataSet.Tables(0).Rows(0).Item(4) = Frm4.descripcion.Text
        dataSet.Tables(0).Rows(0).Item(5) = Frm4.Calificacion.Text
        dataSet.Tables(0).Rows(0).Item(5) = Frm4.genero.Text
        dataSet.Tables(0).Rows(0).EndEdit()
        Comando.Cancel()
        ActualizarBDPeliculas(dataSet)
    End Sub
    'Realiza la sentencia SQL de agregacíon de la película correspondiente
    Public Sub guardarPelicula()
        Dim dataSet As DataSet = New DataSet()
        dataSet = querySelect()
        Dim CadenaInsertarReg As String = "INSERT INTO pelicula (titulo, director, actores, sinopsis,
        calificacion, genero_id) VALUES (@Tit, @Dir,  @Act, @Des, @Cal, @Gen)"
        Dim Comando = New SQLiteCommand(CadenaInsertarReg, SQLConn)
        adapter.InsertCommand = Comando
        'Comando.Parameters.AddWithValue("@Id", Convert.ToInt32(dataSet.Tables(0).Rows(dataSet.Tables(0).Rows.Count - 1).Item(0)))
        Comando.Parameters.AddWithValue("@Tit", Frm4.titulo.Text)
        Comando.Parameters.AddWithValue("@Dir", Frm4.director.Text)
        Comando.Parameters.AddWithValue("@Act", Frm4.actores.Text)
        Comando.Parameters.AddWithValue("@Des", Frm4.descripcion.Text)
        Comando.Parameters.AddWithValue("@Cal", Frm4.Calificacion.Text)
        Comando.Parameters.AddWithValue("@Gen", Convert.ToInt32(Frm4.genero.Text))
        fila = dataSet.Tables(0).NewRow
        fila.Item(1) = Frm4.titulo.Text
        fila.Item(2) = Frm4.director.Text
        fila.Item(3) = Frm4.actores.Text
        fila.Item(4) = Frm4.descripcion.Text
        fila.Item(5) = Frm4.Calificacion.Text
        fila.Item(6) = Frm4.genero.Text
        dataSet.Tables(0).Rows.Add(fila)
        Comando.Cancel()
        ActualizarBDPeliculas(dataSet)

    End Sub
    'Ejecuta en la BD los cambios recogidos por el DataSet en
    Public Sub ActualizarBDPeliculas(dataSet As DataSet)
        Dim datoCambios = New DataSet()
        Try
            If dataSet.HasChanges() Then
                datoCambios = dataSet.GetChanges
                If dataSet.HasErrors() Then
                    MsgBox("Error")
                    dataSet.RejectChanges()
                Else
                    Dim adaptador = adapter
                    MsgBox("Operacion completada correctamente")
                    Dim rows = adapter.Update(datoCambios, "pelicula")
                    'dataSet.AcceptChanges()
                End If
            End If
        Catch ex As Exception
        End Try
    End Sub
    'Rellena los campos de los formulario de consulta y edicion con los valores del DataSet
    Public Sub visualizarRegistroDataAdapter(indice As Integer, dataSet As DataSet, form As Form)
        adapter.Fill(dataSet, "pelicula")
        Select Case form.Name
            Case "Frm3"
                Frm3.IdPelicula.Text = dataSet.Tables(0).Rows(indice).Item(0)
                Frm3.Calificacion.Text = dataSet.Tables(0).Rows(indice).Item(5)
                Frm3.genero.Text = dataSet.Tables(0).Rows(indice).Item(6)
                Frm3.titulo.Text = dataSet.Tables(0).Rows(indice).Item(1)
                Frm3.director.Text = dataSet.Tables(0).Rows(indice).Item(2)
                Frm3.actores.Text = dataSet.Tables(0).Rows(indice).Item(3)
                Frm3.descripcion.Text = dataSet.Tables(0).Rows(indice).Item(4)
            Case "Frm4"
                Frm4.IdPelicula.Text = dataSet.Tables(0).Rows(indice).Item(0)
                Frm4.Calificacion.Text = dataSet.Tables(0).Rows(indice).Item(5)
                Frm4.genero.Text = dataSet.Tables(0).Rows(indice).Item(6)
                Frm4.titulo.Text = dataSet.Tables(0).Rows(indice).Item(1)
                Frm4.director.Text = dataSet.Tables(0).Rows(indice).Item(2)
                Frm4.actores.Text = dataSet.Tables(0).Rows(indice).Item(3)
                Frm4.descripcion.Text = dataSet.Tables(0).Rows(indice).Item(4)
        End Select
    End Sub
    'Rellena las filas de la tabla del formulario de listado, a traves de los datos contenidos en el DataSet
    Public Sub rellenarTabla(dataSet As DataSet)
        Dim ElementoList As ListViewItem
        Frm2.listado.Items.Clear()
        For pos As Integer = 0 To dataSet.Tables(0).Rows.Count - 1
            ElementoList = Frm2.listado.Items.Add(dataSet.Tables(0).Rows(pos).Item(0))

            ElementoList.SubItems.Add(dataSet.Tables(0).Rows(pos).Item(1))
            ElementoList.SubItems.Add(dataSet.Tables(0).Rows(pos).Item(2))
            ElementoList.SubItems.Add(dataSet.Tables(0).Rows(pos).Item(3))
            ElementoList.SubItems.Add(dataSet.Tables(0).Rows(pos).Item(4))
            ElementoList.SubItems.Add(dataSet.Tables(0).Rows(pos).Item(5))
            ElementoList.SubItems.Add(dataSet.Tables(0).Rows(pos).Item(6))
        Next
    End Sub
    'Rellena el DataSet con los datos de todas las peliculas de la BD
    Public Function querySelect() As DataSet
        Dim dataSet As DataSet = New DataSet()
        Dim CadenaConsultar As String = "select * from pelicula"
        adapter = New SQLiteDataAdapter(CadenaConsultar, SQLConn)
        adapter.Fill(DataSet, “pelicula")
        Return DataSet
    End Function
End Module
```


import { ipcMain } from "electron";

// como se fosse as rotas do backend

ipcMain.handle('fetch-documents', async () => {
  return [
    {id: 1, title: 'ignite'},
    {id: 2, title: 'Discover'},
    {id: 3, title: 'Rockeseat'},
    {id: 4, title: 'Docs'},
  ]
});
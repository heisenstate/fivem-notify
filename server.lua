RegisterNetEvent('notify:sendToClient')
AddEventHandler('notify:sendToClient', function(target, type, title, message)
    TriggerClientEvent('notify:' .. type, target, title, message)
end)
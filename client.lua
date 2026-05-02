RegisterNetEvent('notify:success')
RegisterNetEvent('notify:error')
RegisterNetEvent('notify:info')
RegisterNetEvent('notify:action')

local function sendNotification(type, title, message)
    SendNUIMessage({
        type = type,
        title = title,
        message = message
    })
    if type == 'success' then
        PlaySoundFrontend(-1, 'PURCHASE', 'HUD_AWARDS', true)
    elseif type == 'error' then
        PlaySoundFrontend(-1, 'ERROR', 'HUD_AWARDS', true)
    elseif type == 'info' then
        PlaySoundFrontend(-1, 'INFO', 'HUD_AWARDS', true)
    elseif type == 'action' then
        PlaySoundFrontend(-1, 'CHECKPOINT_NORMAL', 'HUD_AWARDS', true)
    end
end

AddEventHandler('notify:success', function(title, message)
    sendNotification('success', title, message)
end)

AddEventHandler('notify:error', function(title, message)
    sendNotification('error', title, message)
end)

AddEventHandler('notify:info', function(title, message)
    sendNotification('info', title, message)
end)

AddEventHandler('notify:action', function(title, message)
    sendNotification('action', title, message)
end)

-- Test Commands
RegisterCommand('notify-test', function(source, args)
    local type = args[1]

    if type == 'all' then
        SetTimeout(0,    function() sendNotification('success', 'Erfolg',             'Aktion wurde erfolgreich ausgeführt.') end)
        SetTimeout(500,  function() sendNotification('error',   'Fehler',             'Etwas ist schiefgelaufen.') end)
        SetTimeout(1000, function() sendNotification('info',    'Information',        'Das solltest du wissen.') end)
        SetTimeout(1500, function() sendNotification('action',  'Aktion erforderlich','Bitte bestätige die Aktion.') end)
    elseif type == 'success' then
        sendNotification('success', 'Erfolg', 'Aktion wurde erfolgreich ausgeführt.')
    elseif type == 'error' then
        sendNotification('error', 'Fehler', 'Etwas ist schiefgelaufen.')
    elseif type == 'info' then
        sendNotification('info', 'Information', 'Das solltest du wissen.')
    elseif type == 'action' then
        sendNotification('action', 'Aktion erforderlich', 'Bitte bestätige die Aktion.')
    else
        sendNotification('error', 'Ungültiger Typ', 'Nutze: /notify-test [all/success/error/info/action]')
    end
end, false)
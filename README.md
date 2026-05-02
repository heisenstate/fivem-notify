# fivem-notify

Lightweight notification system for FiveM.

4 notification types — success, error, info, action. Each with a matching icon, color and progress bar.

> **Tested on ESX 1.2 only.** Compatibility with other frameworks is not guaranteed.

## Preview

![Preview](https://cdn.heisenstate.de/img/notify-system-preview.png)

Notifications slide in from the left with a shrinking progress bar. Auto-dismiss after 4 seconds.

| Type | Color |
|------|-------|
| success | Blue `#19519B` |
| error | Red `#E53935` |
| info | Green `#43A047` |
| action | Orange `#FB8C00` |

## Installation

1. Drop the resource into your `resources` folder
2. Add `ensure fivem-notify` to your `server.cfg`

## Usage

**Client:**
```lua
TriggerEvent('notify:success', 'Titel', 'Nachricht')
TriggerEvent('notify:error',   'Titel', 'Nachricht')
TriggerEvent('notify:info',    'Titel', 'Nachricht')
TriggerEvent('notify:action',  'Titel', 'Nachricht')
```

**Server → Client:**
```lua
TriggerClientEvent('notify:success', source, 'Titel', 'Nachricht')
TriggerClientEvent('notify:error',   source, 'Titel', 'Nachricht')
```

## Test Command

The resource includes a `/notify-test` command for development purposes. It has **no ACE restriction** — anyone on the server can use it.

**Before going live, either remove it from `client.lua` or restrict it:**
```lua
-- Option 1: delete the RegisterCommand block entirely

-- Option 2: restrict to admins
RegisterCommand('notify-test', function(source, args)
    -- your code
end, true) -- true = ace restricted (add 'command.notify-test' to your ACE config)
```

## License

MIT — see [LICENSE](LICENSE)
